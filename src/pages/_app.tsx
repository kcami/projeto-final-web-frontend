import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { AuthProvider } from "@/contexts/authenticationContext"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
