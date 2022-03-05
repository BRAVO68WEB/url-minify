import styled from "styled-components"


export default styled.div`
  
  display:flex;
  height:100vh;
  .sidebar {
    padding-top:60px;
    background-color: #00253A;
    float: left;
    width: 20%;
    min-width:300px;
    height: 100%;
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
        color: white;
        font-size: 1.1rem;
        margin: 0;
        padding: 10px 10px 10px 90px;
        text-align: left;
        cursor: pointer;
        display: flex;

        :hover {
          background-color: #07344A;
          color: #43BFD6;
          border-left: 5px solid #43BFD6;
        }
      }
    }
  }

  .main{
    padding-top:60px;
    flex:1;
    display:flex;
    flex-direction:column;
    .row2{
      flex:1;
      display:flex;
      width:100%;
      align-items:center;
      padding:5%;
      padding-top:10px;
      box-sizing:border-box;
      justify-content:space-between;
      .graph{
        border-radius:10px;
        border:3px solid #E1E1E1;
        height:100%;
        padding:15px;
        width:68%;
        min-width:400px;
      }
      .versions{
        border-radius:10px;
        border:3px solid #E1E1E1;
        height:100%;
        padding:15px;
        width:30%;
        min-width:300px;
        .version{
          display:flex;
          margin-bottom:10px;
          .icon{
            width:40%;
            padding:5px;
            .box{
              height:64px;
              width:64px;
              border-radius:100px;
              display:flex;
              justify-content:center;
              align-items:center;
              font-size:1.2rem;
            }
          }
          .title{
            width:60%;
            font-size:1.5rem;
            font-weight:500;
            display:flex;
            align-items:center;
          }
        }
      }
    }
  }

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
    margin-top: -15px;
    padding-left: 5%;
    .row2 {
      padding-top: 5%;
      height: 1px;
      border-bottom: 1px solid gray;
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

  .column {
    flex: 30%;
    height: 250px;
  }

  .list2 {
    margin-bottom: 10px;
    list-style-type: none;
  }
`