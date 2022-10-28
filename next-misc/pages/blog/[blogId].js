import Head from "next/head";

function Blog({title, description}) {
  return (
      <>
        <Head>
          <title>{title}</title>
          <description name='description' content={description}/>
        </Head>
        <h1 className='content'>Article</h1>
        <h1 className='content'>Env: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
      </>
  )
}

export default Blog

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  console.log(user, password)

  return {
    props: {
      title: 'Article Title',
      description: 'Article description'
    }
  }
}
