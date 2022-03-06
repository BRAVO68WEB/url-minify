import styled from 'styled-components'

export default styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  @media (max-width: 1100px) {
    display: block;
  }

  /* this shows sidebar when menu icon is clicked */
  .toggle_sidebar {
    @media (max-width: 1100px) {
      left: 0px !important;
    }
  }

  .sidebar {
    flex-shrink: 0;
    padding-top: 60px;
    background-color: #00253a;
    width: 300px;
    height: 100%;
    color: white !important;
new-feature
    
=======
    transition: all 0.25s;

    @media (max-width: 1100px) {
      left: -300px;
      position: absolute;
      z-index: 100;
    }

    /* for small screens */
    @media (max-width: 300px) {
      width: 100vw;
    }
main

    .brand-name {
      margin-top: 40px;
      padding-left: 20px;
      text-align: center;
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

    .close_icon {
      display: none;
      font-size: 2rem;

      @media (max-width: 1100px) {
        display: inline-block;
        position: relative;
        right: 0;
        top: 20px;
        margin-left: 80%;
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
        color: white;
        font-size: 1.1rem;
        margin: 0;
        padding: 10px 10px 10px 90px;
        text-align: left;
        cursor: pointer;
        display: flex;

        :hover {
          background-color: #07344a;
          color: #43bfd6;
          border-left: 5px solid #43bfd6;
        }
      }
    }
  }

  .main {
    padding-top: 90px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .row2 {
      flex: 1;
      display: flex;
      width: 100%;
      align-items: center;
      padding: 20px 40px;
      justify-content: space-evenly;

      @media (max-width: 1100px) {
        margin: 30px 0;
      }

      @media (max-width: 800px) {
        flex-direction: column;
      }

      .graph {
        border-radius: 10px;
        border: 3px solid #e1e1e1;
        height: 100%;
        padding: 15px;
        width: 60%;
        max-width: 700px;

        @media (max-width: 1100px) {
          height: 500px;
        }

        @media (max-width: 800px) {
          width: clamp(200px, 500px, 90vw);
        }
      }
      .versions {
        border-radius: 10px;
        border: 3px solid #e1e1e1;
        height: 100%;
        padding: 15px;
        width: 30%;
        min-width: 250px;

        @media (max-width: 800px) {
          margin: 20px 0;
          width: clamp(200px, 500px, 90vw);
        }

        .version {
          display: flex;
          margin-bottom: 10px;
          .icon {
            width: 40%;
            padding: 5px;
            .box {
              height: 64px;
              width: 64px;
              border-radius: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.2rem;
            }
          }
          .title {
            width: 60%;
            font-size: 1.5rem;
            font-weight: 500;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
new-feature
  
=======

main
  .sidebar2 {
    text-align: center;
    margin-top: 10px;
    position: relative;

    .hamburger_icon {
      position: absolute;
      top: 0;
      left: 1rem;
      display: none;
      font-size: 3rem;

      @media (max-width: 1100px) {
        display: block;
      }
    }
    .dash {
      display: inline-block;
      text-align: left;
      margin-bottom: 40px;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      overflow-x: auto;

      @media (max-width: 800px) {
        flex-direction: column;
      }
    }
  }

new-feature
  .sidebar3 {
    text-align: center;
    margin-top:10px;
    padding-left:5%;
    padding-top:2%;
    .dash {
      text-align: left;
      margin-bottom: 40px;
    }
    .bar {
      padding-bottom: 2%;
    }
    .row1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding-right: 80px;
      padding-left: 20px;
      overflow-x: auto;
      background: #c0c0c0;
      max-width: 970px;
    }
    .srNo {
      margin-right: 10px;
    }
    .URL {
      padding-right: 380px;
      margin-right: 164px;
    }
    .Alias {
      margin-right: 94px;
      margin-left: -14px;
    }
    .Status {
      margin-right: -24px;
    }
    .Views {
      margin-left: 34px;
      margin-right: -54px;
    }
  }

  .table {
    text-align: center;
    margin-top: 10px;
    padding-left: 5%;
    .row2 {
      display: flex;
      justify-content: space-between;
      padding-left: 20px;
      position: relative;
      .tname {
        padding-left: 1%;
        width: 25px;
      }
      .tage {
        padding-left: 5%;
        text-align: left;
        text-decoration: underline;
        width: 665px;
      }
      .talias {
        width: 158px;
        text-align: left;
      }
      .tstatus {
        width: 85px;
        text-align: left;
      }
      .tviews {
        padding-left: 1%;
      }
    }
  }

=======
main
  .column {
    flex: 30%;
    height: 250px;
  }

  .list2 {
    margin-bottom: 10px;
    list-style-type: none;
  }
`
