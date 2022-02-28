import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="first-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2B6KSDLLS`}
      />

      <Script id="second-script" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2B6KSDLLS3');
                `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
