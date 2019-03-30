import React, {useState, useEffect} from 'react'
import PostTable from "./tables/PostTable";
import AddPostForm from "./forms/AddPostForm";
import * as axios from "axios";

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
          'http://localhost:8080/api/posts',
      );

      setPosts(result.data);
    };
    fetchData();
  }, []);

  const [posts, setPosts] = useState({posts: []});

  const addPost = post => {
    post.id = posts.length + 1;
    setPosts([...posts, post])
  };

  return (
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add post</h2>
            <AddPostForm addPost={addPost}/>
          </div>
          <div className="flex-large">
            <h2>View posts</h2>
            <PostTable posts={posts}/>
          </div>
        </div>
      </div>
  )
};

export default App