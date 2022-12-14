import {getSession, useSession} from "next-auth/react";

function Blog({data}) {
  const {data: session, status} = useSession()
  console.log(`Blog ${session} ${status}`)
  return (
      <>
        <h1>Blog page</h1>
        <h2>{data}</h2>
      </>
  )
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log(session)

  if(!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
      data: session ? 'Authenticated User' : 'Non Authenticated user'
    }
  }
}
