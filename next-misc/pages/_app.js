import '../styles/globals.css'
import '../styles/layout.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {

  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
  )
}

export default MyApp
