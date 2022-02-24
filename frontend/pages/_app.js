import '../styles/globals.css'
import '../styles/logostyles.css'
import '../styles/styles.css'
import '../styles/index.css'
import '../styles/404.css'
import { UserAuthProvider } from '../helpers/user/usercontext'

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
  )
}

export default MyApp
