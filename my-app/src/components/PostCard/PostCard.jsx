import React, { useState, useEffect } from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  // Load likes from LocalStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem(`post-${post.id}-likes`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }
  }, [post.id]);

  // Update likes in LocalStorage
  const handleLike = () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    localStorage.setItem(`post-${post.id}-likes`, updatedLikes);
  };

  return (
    <div className="card post-card">
      <div className="card-header d-flex align-items-center">
        <img
          src={post.authorPhoto}
          alt={post.author}
          className="author-photo me-2"
        />
        <div>
          <h5 className="mb-0">{post.author}</h5>
          <small className="text-muted">2h ago</small>
        </div>
      </div>
      <div className="card-body">
        <p>{post.content.text}</p>
        {post.content.image && (
          <img
            src={post.content.image}
            alt="Post content"
            className="img-fluid rounded"
          />
        )}
      </div>
      <div className="card-footer">
        <button className="btn btn-link" onClick={handleLike}>
          👍 Like ({likes})
        </button>
        <button className="btn btn-link" data-bs-toggle="modal" data-bs-target={`#commentModal-${post.id}`}>
          💬 Comment
        </button>
        <button className="btn btn-link">🔗 Share</button>
      </div>

      {/* Modal for Adding Comments */}
      <div
        className="modal fade"
        id={`commentModal-${post.id}`}
        tabIndex="-1"
        aria-labelledby={`commentModalLabel-${post.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`commentModalLabel-${post.id}`}>
                Add a Comment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control"
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
