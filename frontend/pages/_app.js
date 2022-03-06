import '../styles/globals.css'
import '../styles/logostyles.css'
import '../styles/styles.css'
import '../styles/index.css'
import '../styles/404.css'
import { UserAuthProvider } from '../helpers/user/usercontext'
import Page from 'react-page-loading'


function MyApp({ Component, pageProps }) {
  return (
    <UserAuthProvider>
      <Page loader={"bar"} color={"#03b1fc"} size={10} >
        <Component {...pageProps} />

      </Page>

    </UserAuthProvider>
  )
}

export default MyApp
