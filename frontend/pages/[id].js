import { useEffect, useState } from 'react'
import Head from 'next/head'
import HomeSection from 'components/HomeSection/HomeSection'
import NavBar from 'components/NavBar'
import Features from 'components/Features'
import { useRouter } from 'next/router'
import axios from 'helpers/Axios'

function Redirector(props) {
  const router = useRouter()
  useEffect(() => {
    if (!props?.resData.success) {
      // router.push('/404')
    } else {
      // router.replace(`${props.resData.data.originalUrl}`)
    }
  }, [])
  return (
    <div className={''}>
      <Head>
        <title>URL MiniFy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main-bg'}>Not Found</main>
    </div>
  )
}

Redirector.getInitialProps = async (context) => {
  const { id } = context.query
  let resData = {}
  if (id) {
    axios.get(`/minify/${id}/views`).catch((err) => {
      console.error(err)
    })
    await axios
      .get(`/minify/alias/${id}`)
      .then(function (response) {
        resData = response.data
      })
      .catch(function (error) {
        resData = error
      })
  }

  if (context?.res) {
    const go = resData?.data?.originalUrl ? resData?.data?.originalUrl : '/404'
    // console.log(go)
    context?.res.writeHead(302, {
      Location: go,
    })
    context?.res.end()
  }

  return {}
}

export default Redirector
