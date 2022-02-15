import "../styles/globals.css";
import "../styles/logostyles.css";
import "../styles/styles.css";
import { UserAuthProvider } from "./user/usercontext";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
  );
}

export default MyApp;
