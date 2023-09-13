import { useState, useEffect } from "react";
import "./App.css";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [posts, setPosts] = useState([]); // Store posts
  const [editingPost, setEditingPost] = useState(null); // Track editing post

  useEffect(() => {
    // Make a GET request to your Node.js API
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const createPost = (newPost) => {
    // Add new post to the posts array
    setPosts([newPost, ...posts]);
  };

  const editPost = (post) => {
    // Set the post to edit
    setEditingPost(post);
  };

  const saveEditedPost = (editedPost) => {
    // Find the post to edit, update it, and save
    const updatedPosts = posts.map((post) =>
      post.id === editedPost.id ? editedPost : post
    );
    setPosts(updatedPosts);
    setEditingPost(null); // Reset editing state
  };

  const deletePost = (postId) => {
    // Filter out the post to delete
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="container">
      <div className="col">
        <div className="row-lg-4">
          {editingPost ? (
            <EditPost
              postToEdit={editingPost}
              saveEditedPost={saveEditedPost}
            />
          ) : (
            <CreatePost createPost={createPost} />
          )}
        </div>
        <div className="row-lg-8">
          <PostList posts={posts} editPost={editPost} deletePost={deletePost} />
        </div>
      </div>
    </div>
  );
}

export default App;
