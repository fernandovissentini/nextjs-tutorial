import {useState} from "react";

function CommentsPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const fetchComments = async () => {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
  }

  const submitComment = async () => {
    const res = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    await fetchComments()
  }

  const deleteComment = async  commentId => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    await fetchComments()
  }

  return (
      <div>
        <p/>
        New Comment:&nbsp;
        <input type='text' value={comment}
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
                </div>
            )
          })
        }
      </div>
  )
}

export default CommentsPage
