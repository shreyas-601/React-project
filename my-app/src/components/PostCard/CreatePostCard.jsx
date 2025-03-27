import React, { useState } from 'react';
import './CreatePostCard.css';

const CreatePostCard = ({ addPost }) => {
  const [postContent, setPostContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (postContent) {
      const newPost = {
        id: Date.now(),
        author: 'Current User',
        authorPhoto: 'https://via.placeholder.com/40',
        date: new Date().toLocaleString(),
        content: { text: postContent, image: imageUrl },
        likes: 0,
        comments: [],
      };
      addPost(newPost); // Pass the new post to the feed
      setPostContent('');
      setImageUrl('');
    }
  };

  return (
    <div className="card create-post-card mb-4">
      <div className="card-body">
        <h5 className="card-title">Create a Post</h5>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Write something..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
