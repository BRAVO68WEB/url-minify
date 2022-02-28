import styled from 'styled-components'

export default styled.div`
  .sidebar {
    background-color: #00253a;
    float: left;
    width: 20%;
    height: 100vh;
    color: white !important;
    .brand-name {
      margin-top: 40px;
      padding-left: 20px;
    }
    .profile {
      margin: 25px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .profile-image {
        max-width: 35%;
        margin: auto;
        border-radius: 100%;
        img {
          max-width: 100%;
          border-radius: 100%;
        }
      }
      .name {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 3px 0;
      }
      .profession {
        color: gray;
        font-size: 0.8rem;
        font-weight: bold;
        margin: 0;
      }
    }
    .creatButton {
      margin: 40px auto 80px;
      width: 70%;
      button {
        width: 100%;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        padding: 10px;
        background-color: blueviolet;
        outline: none;
        border: none;
        border-radius: 5px;
      }
    }
  }
  .nav-buttons {
    .nav-item {
      margin: 0;
      button {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 10px;
        color: white;
        font-size: 1.1rem;
        margin: 0;
        padding-left: 20px;
        text-align: left;
        :hover {
          background-color: #07344a;
          color: #43bfd6;
          border-left: 5px solid #43bfd6;
        }
      }
    }
  }
  .sidebar2 {
    text-align: center;
  }
  .dash {
    text-align: left;
    margin-left: 1.5px;
  }
  .row {
    display: flex;
  }

  .column {
    flex: 30%;
    height: 250px;
  }
  .list2 {
    margin-bottom: 10px;
    list-style-type: none;
  }
`
