import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/home.css";

const Post = ({ post }) => {
  const [likeCount, setLikeCount] = useState(
    JSON.parse(localStorage.getItem(`likes-${post.id}`)) || post.likes
  );
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem(`comments-${post.id}`)) || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = () => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    localStorage.setItem(`likes-${post.id}`, newLikeCount);
  };

  const handleAddComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(updatedComments));
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.userImage} alt="Profile" className="profile-pic" />
        <h5>{post.userName}</h5>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}
      <div className="post-footer">
        <button onClick={handleLike}>Like ({likeCount})</button>
        <button onClick={() => setIsModalOpen(true)}>Comment</button>
        <button>Share</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        comments={comments}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default Post;
