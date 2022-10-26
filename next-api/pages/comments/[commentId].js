import {comments} from "../../data/comments";

function ShowComment({comment}) {
  return (
      <div>
        <h2>{comment.id}</h2>
        <h2>{comment.text}</h2>
      </div>
  )
}

export default ShowComment

export async function getStaticPaths() {
  const paths = comments.map(comment => {
    return {
      params: {
        commentId: `${comment.id}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const {params} = context

  const comment = comments.find((comment) => comment.id === parseInt(context.params.commentId))

  return {
    props: {
      comment
    }
  }
}
