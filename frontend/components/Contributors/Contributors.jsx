import React from 'react'
import ContributorsStyle from './Contributors.style'
import styles from '../../styles/Contributors.module.css'
export default function Contributors() {
  return (
    <ContributorsStyle>
      <>
        <div className={styles.head}>CONTRIBUTORS</div>
        <div className="contributor-cards">
          <div className="contributor-card1">
            <div className="contributor-cardPointer"></div>
            <div className="contributor-Pic"></div>
            <div className="contributor-Name"></div>
            <div className="contributor-GithubUsername"></div>
          </div>
        </div>
      </>
    </ContributorsStyle>
  )
}
