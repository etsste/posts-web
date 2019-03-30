import React from 'react'

const PostTable = props => (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Content</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {props.posts.length > 0 ? (
          props.posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
          ))) : (
          <tr>
            <td colSpan={3}>No post</td>
          </tr>
      )}
      </tbody>
    </table>
)

export default PostTable