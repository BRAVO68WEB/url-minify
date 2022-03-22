import React, { useState } from 'react'
import ContributorsStyle from './Contributors.style'
import styles from '../../styles/Contributors.module.css'
import Image from 'next/image'
import profilepic from 'assets/ContributorsImages/sampleImage.jpg'
import { GitHub } from '@mui/icons-material'
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
    <ContributorsStyle>
      <>
        <div className={styles.head}>CONTRIBUTORS</div>
        <div className="contributor-cards">
          {contributors.map((contributor) => {
            return (
              <div className="contributor-card" key={contributor.id}>
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
      </>
    </ContributorsStyle>
  )
}
