import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  border-radius: 12px;
  padding: 28px;
  width: 300px;

  @media (max-width: 1299px) {
    padding: 0 5px;
    width: 250px;
  }

  @media (max-width: 800px) {
    width: clamp(200px, 500px, 90vw);
    margin: 10px;
    height: 100px;
  }

  .icon {
    width: 80px;
    padding: 5px;
    img {
      width: 100%;
    }
  }
  .content {
    width: 100%;
    text-align: left;
    padding-left: 20px;

    @media (max-width: 1299px) {
      text-align: center;
      padding-left: 0;
    }

    .value {
      font-size: 2.2rem;
      font-weight: bold;
      p {
        margin: 0;
      }
    }
    .title {
      p {
        margin: 0;
      }
      font-size: 1.8rem;
      margin-top: 0;
      font-weight: 600;
      color: #00000080;
    }
  }
`
