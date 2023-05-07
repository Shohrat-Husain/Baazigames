import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      aos: "fade-up",
      duration: "300",
    });
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
  
}

export default MyApp;
