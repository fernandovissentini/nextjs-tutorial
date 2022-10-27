import Footer from "../components/Footer";
import Head from "next/head";

function About() {
  return (
      <>
        <Head>
          <title>About Page</title>
          <meta name='description'
                content='This is the description for this page'/>
        </Head>
        <h1 className='content'>About page</h1>
      </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
      <>
        {page}
        <Footer/>
      </>
  )
}
