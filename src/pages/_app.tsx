import "../styles/customBootstrap.scss";
import "../styles/globals.css";

import { UTIBedsProvider } from "@/contexts/UTIBedsContext";
import { AuthProvider } from "@/contexts/authenticationContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <UTIBedsProvider>
          <Component {...pageProps} />
        </UTIBedsProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
