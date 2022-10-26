import {useState} from "react";

function CommentsPage() {
  const [comments, setComments] = useState([])
  const fetchComments = async () => {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
  }
  return (
      <div>
        <button onClick={fetchComments}>Load Comments</button>
        {
          comments.map((comment) => {
            return (
                <div key={comment.id}>
                  {comment.id} {comment.text}
                </div>
            )
          })
        }
      </div>
  )
}

export default CommentsPage
