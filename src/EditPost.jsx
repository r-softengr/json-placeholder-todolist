import React, { useState } from "react";

const EditPost = ({ postToEdit, saveEditedPost }) => {
  const [editedPost, setEditedPost] = useState(postToEdit);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSave = () => {
    saveEditedPost(editedPost);
  };

  return (
    <div className="card">
      <h2>{editedPost.title}</h2>
      <div className="mb-3">
        <textarea
          name="body"
          placeholder="Body"
          value={editedPost.body}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default EditPost;
