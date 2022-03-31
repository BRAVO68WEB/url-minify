import React, { useState } from 'react'
import ContributorsStyle from './Contributors.style'
import styles from '../../styles/Contributors.module.css'
import Image from 'next/image'
import profilepic from 'assets/ContributorsImages/sampleImage.jpg'
import { GitHub } from '@mui/icons-material'
import Head from "next/head";
import Script from "next/script";

export default function Contributors() {
  const [contributors, setContributors] = useState([
    {
      id: 1,
      profilepic,
      name: 'Jacob Myers',
      gitHubUsername: '@jacob',
    },
    {
      id: 2,
      profilepic,
      name: 'John Doe',
      gitHubUsername: '@john',
    },
    {
      id: 3,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
    {
      id: 4,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
    {
      id: 5,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
    {
      id: 6,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
    {
      id: 7,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
    {
      id: 8,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
    {
      id: 9,
      profilepic,
      name: 'Sara Williams',
      gitHubUsername: '@sara',
    },
  ])
  return (
    <>
       <Head> 
        <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
        />
      </Head>
      <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      
    <ContributorsStyle>
      <>
        <div className={styles.head}>CONTRIBUTORS</div>
       <div class="conatiner contributor-cards">
        <div className="contributor-cards row">
          {contributors.map((contributor) => {
            return (
              <div className="contributor-card col-3" key={contributor.id}>
                <div className="contributor-cardPointerStart">
                  <div id="circle"></div>
                </div>
                <div id="ImageContainer">
                  <Image
                    src={contributor.profilepic}
                    alt="Contributors Profile Picture"
                    width={'100px'}
                    height={'100px'}
                    className="contributor-Pic"
                  />
                </div>
                <div id="contributorDetailsWrapper">
                  <div className="contributor-Name">{contributor.name}</div>
                  <div className="contributor-GithubUsername">
                    <GitHub />
                    <span id="username">{contributor.gitHubUsername}</span>
                  </div>
                </div>
              </div>
              
            )
          })}
          </div>
          </div>
        </>
      </ContributorsStyle>
      </>
  )
}
