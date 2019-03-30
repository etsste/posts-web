import React, {useState} from 'react';
import axios from "axios";

const AddPostForm = props => {

  const initialFormState = {id: null, title: '', content: ''};
  const [post, setPost] = useState(initialFormState);

  const handleInputChange = event => {
    const {name, value} = event.target;

    setPost({...post, [name]: value})
  };

  return (
      <form onSubmit={event => {
        console.log(post);
        event.preventDefault();
        console.log(!post.title);
        console.log(!post.content);
        if (!post.title || !post.content) {
          return;
        }

        const postData = Object.assign({}, {
          title: post.title,
          content: post.content
        });

        console.log(postData);

        axios.post('http://localhost:8080/api/posts', postData)
        .then(response => response.data.error)
        .catch(error => console.log(error));
        console.log(post);
        // props.addPost(post);
        setPost(initialFormState)

      }}>
        <label>Title</label>
        <input type="text" name="title" value={post.title}
               onChange={handleInputChange}/>
        <label>Content</label>
        <input type="text" name="content" value={post.content}
               onChange={handleInputChange}/>
        <button>Add new post</button>
      </form>
  )
};

export default AddPostForm