import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "../styles/postcard.css";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(() => {
    return parseInt(localStorage.getItem(`likes-${post.id}`)) || 0;
  });

  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`liked-${post.id}`) === "true";
  });

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem(`comments-${post.id}`)) || [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle like functionality
  const handleLike = () => {
    if (!isLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      localStorage.setItem(`likes-${post.id}`, newLikes);
      setIsLiked(true);
      localStorage.setItem(`liked-${post.id}`, "true");
    }
    else {
      const newLikes = likes - 1;
      setLikes(newLikes);
      localStorage.setItem(`likes-${post.id}`, newLikes);
      setIsLiked(false);
      localStorage.setItem(`liked-${post.id}`, "false");
    }
  };

  // Handle adding comments
  const handleAddComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updatedComments));
  };

  // Open modal for comments
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.userImage} alt="Profile" className="profile-pic" />
        <h4>{post.username}</h4>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}
      
      <div className="post-actions">
        <button className={isLiked ? "liked" : ""} onClick={handleLike}>
          👍 Like ({likes})
        </button>
        <button onClick={openModal}>💬 Comment ({comments.length})</button>
        <button>🔄 Share</button>
      </div>

      {/* Comment Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        comments={comments} 
        onAddComment={handleAddComment} 
      />
    </div>
  );
};

export default PostCard;
