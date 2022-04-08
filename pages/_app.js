import Layout from "../components/layout";
import "../styles/globals.css";
import Howto from "./howto/index"

function MyApp({ Component, pageProps,router }) {
  if (router.pathname.startsWith("/howto")) {
    return <Howto />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
