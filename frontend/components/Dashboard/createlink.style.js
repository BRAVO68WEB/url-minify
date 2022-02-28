import styled from 'styled-components'

export default styled.div`
  h2 {
    color: #00253a;
    font-size: 33px;
  }
  input {
    width: 550px;
    padding: 16px;
    border-radius: 5px;
    background-color: #f2f2f2;
    border: none;
  }

  .frame {
    width: 79%;
    margin-left: 26%;
    padding-top: 60px;
    font-family: 'Poppins', sans-serif;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
  }

  button {
    width: 49%;
    height: 45px;
    border-radius: 5px;
    background-color: #f2f2f2;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  .btndiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .submit {
    background-color: #43bfd6;
    color: white;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 16px;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    background-color: #f2f2f2;
    font-size: 16px;
    resize: none;
  }
  .textdiv {
    width: 100%;
  }

  .textdiv,
  .aliasdiv,
  .titlediv,
  .hugediv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 7px;
  }
`
