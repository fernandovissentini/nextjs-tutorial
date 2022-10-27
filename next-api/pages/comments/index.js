import {useState} from "react";

function CommentsPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [commentId, setCommentId] = useState('')

  const fetchComments = async () => {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
    setComment('')
    setCommentId('')
  }

  const submitComment = async () => {
    if (comment === '') {
      return
    }
    const res = await fetch(`/api/comments${commentId ? '/' + commentId : ''}`,
        {
          method: `${commentId ? 'PUT' : 'POST'}`,
          body: JSON.stringify({comment}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    const data = await res.json()
    await fetchComments()
    setComment('')
    setCommentId('')
  }

  const deleteComment = async commentId => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    await fetchComments()
    setComment('')
    setCommentId('')
  }

  return (
      <div>
        <p/>
        Comment Id: <input type='text' value={commentId} disabled={true}/>
        &nbsp;New Comment:&nbsp;
        <input type='text' value={comment} key='f1'
               onChange={(e) => setComment(e.target.value)}/>
        <p/>
        <button onClick={submitComment}>Submit Comment</button>
        <p/>
        <hr/>
        <button onClick={fetchComments}>Load Comments</button>
        {
          comments.map((comment) => {
            return (
                <div key={comment.id}>
                  {comment.id} {comment.text}
                  <button onClick={() => deleteComment(comment.id)}>Delete
                  </button>
                  <button onClick={() => {
                    setComment(comment.text)
                    setCommentId(comment.id)
                  }}>
                    Update
                  </button>
                </div>
            )
          })
        }
      </div>
  )
}

export default CommentsPage
