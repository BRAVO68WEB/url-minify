import '../styles/globals.css'
import '../styles/logostyles.css'
import '../styles/formStyles.css'
import '../styles/index.css'
import '../styles/404.css'
import Page from 'react-page-loading'
import UserContextProvider, { userAuth } from 'helpers/user/usercontext'
import { useEffect } from 'react'
import axios from 'helpers/Axios'

function MyApp({ Component, pageProps }) {

  // runs every time any page is loaded
  useEffect(async () => {
    const token = localStorage.getItem('token')
    
    if(!token){
      return
    }

    try {
      const res = await axios.get(`/user/authenticate`, { headers: { authorization: `Bearer ${token}` }})
      console.log(res)      
      
      // add user to the context here if the token is valid
      
    } 
    catch (error) {
      // if token is invalid remove it from localStorage
      if(error.response.status === 401){
         console.log(error.response.data)
         localStorage.removeItem("token")
      }
    }  
  }, [])
    
  return (
    <UserContextProvider>
      <Page loader={"bar"} color={"#03b1fc"} size={10} >
        <Component {...pageProps} />
      </Page>
    </UserContextProvider>
  )
}

export default MyApp
