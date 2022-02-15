import { useEffect, useState } from "react";
import Head from "next/head";
import HomeSection from "components/HomeSection/homeSection";
import NavBar from "components/NavBar";
import Features from "components/Features";
import { useRouter } from "next/router";
var axios = require("axios");

function Redirector(props) {
  const router = useRouter();
  // const { id } = router.query;
  // useEffect(() => {
  //    if (id) {
  //       var config = {
  //          method: 'get',
  //          url: `http://localhost:5000/minify/alias/${id}`
  //        };
  //        axios(config)
  //        .then(function (response) {
  //          if(!response.data.success){
  //             router.replace('/404')
  //          }
  //          else{
  //             router.replace(response.data.data.originalUrl)
  //          }
  //        })
  //        .catch(function (error) {
  //          console.log(error);
  //        });

  //    }
  // },[id])
  useEffect(() => {
    if (!props?.resData.success) {
      // router.push('/404')
    } else {
      // router.replace(`${props.resData.data.originalUrl}`)
    }
  }, []);
  return (
    <div className={""}>
      <Head>
        <title>URL MiniFy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main-bg"}>Not Found</main>
    </div>
  );
}

Redirector.getInitialProps = async (context) => {
  const { id } = context.query;
  let resData = {};
  if (id) {
    var config = {
      method: "get",
      url: `http://localhost:5000/minify/alias/${id}`,
    };
    await axios(config)
      .then(function (response) {
        resData = response.data;
      })
      .catch(function (error) {
        resData = error;
      });
  }

  if (context?.res) {
    const go = resData?.data?.originalUrl ? resData?.data?.originalUrl : "/404";
    console.log(go);
    context?.res.writeHead(302, {
      Location: go,
    });
    context?.res.end();
  }

  return {};
};

// export async function getServerSideProps(context){
//    const { id } = context.query;
//    let resData = {};
//       if (id) {
//          var config = {
//             method: 'get',
//             url: `http://localhost:5000/minify/alias/${id}`
//           };
//           await axios(config)
//           .then(function (response) {
//             resData = response.data;
//           })
//           .catch(function (error) {
//             resData = error;
//           });

//       }

//       return {
//          props: {
//               resData : resData
//            }
//      }
// }
export default Redirector;
