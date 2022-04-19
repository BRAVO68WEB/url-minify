import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContributorsStyle from './Contributors.style'
import styles from '../../styles/Contributors.module.css'
import Image from 'next/image'
import profilepic from 'assets/ContributorsImages/sampleImage.jpg'
import { GitHub } from '@mui/icons-material'
import Head from 'next/head'
import Script from 'next/script'

const contributorsURL =
  'https://api.github.com/repos/bravo68web/url-minify/contributors'

export default function Contributors() {
  const [contributors, setContributors] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setContributors((prev) => ({ ...prev, loading: true }))
        const { data } = await axios.get(contributorsURL)
        setContributors((prev) => ({ ...prev, data }))
      } catch (error) {
        console.log(error)
        setContributors((prev) => ({ ...prev, error: 'There is an error' }))
      } finally {
        setContributors((prev) => ({ ...prev, loading: false }))
      }
    }
    fetchContributors()
  }, [])

  if (contributors.data) {
    // remove bots from contributors list
    contributors.data = [...contributors.data].filter(
      ({ type }) => type === 'User'
    )
  }

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />

      <ContributorsStyle className="conttt">
        <>
          <header>
            <h1 className={styles.head}>CONTRIBUTORS</h1>
          </header>
          {contributors.loading ? (
            <p className="contributors__loading">Loading...</p>
          ) : contributors.error ? (
            <p className="contributors__loading">{contributors.error}</p>
          ) : (
            <ul className="contributor-cards row">
              {contributors.data.map((contributor) => {
                return (
                  <li
                    className="contributor-card col-3 flex"
                    key={contributor.id}
                  >
                    <span className="contributor__indicator"></span>
                    <figure className="contributor__avatar flex">
                      <Image
                        src={contributor.avatar_url}
                        width={100}
                        height={100}
                        alt={`${contributor.login}'s profile picture`}
                      />
                    </figure>
                    <p
                      className="contributor__name ellipsis"
                      title={contributor.login}
                    >
                      {contributor.login}
                    </p>
                    <p className="contributor__github flex">
                      <a
                        href={contributor.url}
                        target="_blank"
                        rel="noopener"
                        className="contributor__github--link flex"
                      >
                        <GitHub className="contributor__github--icon" />
                        <span
                          id="username"
                          className="contributor__github--username ellipsis"
                        >
                          @{contributor.login}
                        </span>
                      </a>
                    </p>
                  </li>
                )
              })}
            </ul>
          )}
        </>
      </ContributorsStyle>
    </>
  )
}
