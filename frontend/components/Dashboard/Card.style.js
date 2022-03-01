import styled from "styled-components";

export default styled.div`
    display:flex;
    align-items:center;
    height: 152px;
    width:30%;
    min-width: 336px;
    left: 0px;
    top: 0px;
    margin-right: 10px;
    border-radius: 12px;
    padding: 28px;
    .icon{
      width:30%;
      padding:5px;
      img{
        width:100%;
      }
    }
    .content{
      width:70%;
      text-align:left;
      padding-left:20px;
      .value{
        font-size:2.2rem;
        font-weight:bold;
        p{
          margin:0;
        }
      }
      .title{
        p{
          margin:0;
        }
        font-size:1.8rem;
        margin-top:0;
        font-weight:600;
        color:#00000080;
      }
    }
    //border: 3px solid #662CDC33
  
`