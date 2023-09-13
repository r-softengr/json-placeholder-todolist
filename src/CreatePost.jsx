import React, { useState } from "react";

const CreatePost = ({ createPost }) => {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = () => {
    createPost(newPost);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div className="card">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="body"
          placeholder="Body"
          value={newPost.body}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default CreatePost;
