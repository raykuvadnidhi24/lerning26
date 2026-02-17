import axios from "axios"
import { useState } from "react"

export const ApiDemo13 = () => {

  const [message, setMessage] = useState("")
  const [comments, setComments] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/comments")
    setMessage("Comments loaded successfully")
    setComments(response.data.comments)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 13</h1>

      <button onClick={getUsers}>GET</button>

      <h2>{message}</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment</th>
            <th>Post ID</th>
            <th>User</th>
          </tr>
        </thead>

        <tbody>
          {
            comments.map(comment => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.body}</td>
                <td>{comment.postId}</td>
                <td>{comment.user.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
