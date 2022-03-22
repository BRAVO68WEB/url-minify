import styled from 'styled-components'
export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .contributor-cards {
    margin-top: 100px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-around;
    align-items: center;
    grid-gap: 20px;
    overflow: scroll;
  }
  .contributor-card {
    width: 190px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 10px;
  }
  .contributor-cardPointerStart {
    width: 180px;
    display: flex;
    justify-content: flex-start;
  }
  #circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: green;
  }
  .contributor-Pic {
    width: 100px;
    height: 100px;
  }
  #ImageContainer {
    border-radius: 50%;
    border: 3px solid #35cdf0;
    overflow: hidden;
  }
  .contributor-Name {
    color: #1d92e0;
    font-size: 25px;
    font-weight: bold;
  }
  #contributorDetailsWrapper {
    display: flex;
    flex-direction: column;
    justfiy-content: flex-start;
  }
  .contributor-GithubUsername {
    display: flex;
    justify-content: baseline;
    font-size: 20px;
  }
  #username {
    color: grey;
    font-weight: bold;
    padding-left: 4px;
  }
  @media (max-width: 600px) {
    .contributor-cards {
      margin-top: 10px;
      display: grid;
      grid-template-columns: auto auto auto;
      justify-content: space-around;
      align-items: center;
      grid-gap: 10px;
      overflow: scroll;
    }
    .contributor-card {
      width: 170px;
      height: 190px;
    }
    .contributor-cardPointerEnd {
      width: 150px;
    }
    .contributor-cardPointerStart {
      width: 150px;
    }
    .contributor-Name {
      font-size: 20px;
    }
    .contributor-GithubUsername {
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    .contributor-cards {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-around;
      grid-gap: 10px;
      overflow: scroll;
    }
    .contributor-card {
      width: 130px;
      height: 190px;
    }
    .contributor-cardPointerEnd {
      width: 120px;
    }
    .contributor-cardPointerStart {
      width: 120px;
    }
    .contributor-Name {
      font-size: 15px;
    }
    .contributor-GithubUsername {
      font-size: 15px;
    }
  }
`
