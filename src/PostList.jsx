import React, { useState } from "react";

const PostList = ({ posts, editPost, deletePost }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary mx-3"
              onClick={() => editPost(post)}
            >
              Edit
            </button>
            <button
              className="btn btn-primary"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
