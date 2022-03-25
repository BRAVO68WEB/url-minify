import styled from 'styled-components'
export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .contributor-cards{
    display: flex;
    width: 85%;
    align-item: center;
    justify-content: center;
    margin:20px;
    margin-left: 6%
  }
  .contributor-card {
    width: 240px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 15px;
    padding: 5px;
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
 
`
