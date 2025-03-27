import React, { useState } from "react";
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  if (!isOpen) return null;

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment("");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h4>Comments</h4>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <input
            type="text"
            value={newComment}
            placeholder="Add a comment..."
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
