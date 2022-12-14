function PostDetail({post}) {
  return <>
    <h1>Post Details for {post.title}</h1>
    <h2>{post.id}</h2>
    <h2>{post.body}</h2>
  </>
}

export async function getStaticPaths() {

  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const postsData = await resp.json()
  const paths = postsData.map(post => {
    return {
      params: { postId: `${post.id}` }
    }
  })
  return {
    // paths: [
    //   {
    //     params: { postId: '1' }
    //   },
    //   {
    //     params: { postId: '2' }
    //   },
    //   {
    //     params: { postId: '3' }
    //   }
    // ],
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const {params} = context
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const postData = await resp.json()

  return {
    props: {
      post: postData
    }
  }
}

export default PostDetail
