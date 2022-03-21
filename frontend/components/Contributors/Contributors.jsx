import React from 'react'
import ContributorsStyle from './Contributors.style'
import styles from '../../styles/Contributors.module.css'
import Image from 'next/image'
import profilepic from 'assets/ContributorsImages/sampleImage.jpg'
import { GitHub } from '@mui/icons-material'
export default function Contributors() {
  return (
    <ContributorsStyle>
      <>
        <div className={styles.head}>CONTRIBUTORS</div>
        <div className="contributor-cards">
          <div className="contributor-card">
            <div className="contributor-cardPointerStart">
              <div id="circle"></div>
            </div>
            <div id="ImageContainer">
              <Image
                src={profilepic}
                alt="Contributors Profile Picture"
                width={'100px'}
                height={'100px'}
                className="contributor-Pic"
              />
            </div>
            <div className="contributor-Name">Jacob Myers</div>
            <div className="contributor-GithubUsername">
              <GitHub />
              <span id="username">@jacob</span>
            </div>
          </div>
          <div className="contributor-card">
            <div className="contributor-cardPointerCenter">
              <div id="circle"></div>
            </div>
            <div id="ImageContainer">
              <Image
                src={profilepic}
                alt="Contributors Profile Picture"
                width={'100px'}
                height={'100px'}
                className="contributor-Pic"
              />
            </div>
            <div className="contributor-Name">Jacob Myers</div>
            <div className="contributor-GithubUsername">
              <GitHub />
              <span id="username">@jacob</span>
            </div>
          </div>
          <div className="contributor-card">
            <div className="contributor-cardPointerEnd">
              <div id="circle"></div>
            </div>
            <div id="ImageContainer">
              <Image
                src={profilepic}
                alt="Contributors Profile Picture"
                width={'100px'}
                height={'100px'}
                className="contributor-Pic"
              />
            </div>
            <div className="contributor-Name">Jacob Myers</div>
            <div className="contributor-GithubUsername">
              <GitHub />
              <span id="username">@jacob</span>
            </div>
          </div>
        </div>
      </>
    </ContributorsStyle>
  )
}
