import styled from 'styled-components'
export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .contributor-cards {
    margin-top: -200px;
    display: flex;
    justify-content: space-around;
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
  .contributor-cardPointerCenter {
    width: 180px;
    display: flex;
    justify-content: center;
  }
  .contributor-cardPointerEnd {
    width: 180px;
    display: flex;
    justify-content: flex-end;
  }
  #circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: green;
  }
  .contributor-Pic {
    border-radius: 50%;
  }
  #ImageContainer {
    border-radius: 50%;
    border: 3px solid green;
  }
  .contributor-Name {
    color: #00bfff;
    font-size: 25px;
    font-weight: bold;
  }
  .contributor-GithubUsername {
    display: flex;
    justify-content: baseline;
    font-size: 20px;
  }
  #username {
    color: grey;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    .contributor-cards {
      width: 100vw;
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
      font-size: 15px;
    }
  }
  @media (max-width: 400px) {
    .contributor-cards {
      width: 100vw;
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
