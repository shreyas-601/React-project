import React, { useState, useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import "./PostFeed.css";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json") // Fetch posts dynamically from `public`
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the feed
  };

  return (
    <div className="container mt-4 post-feed">
      <CreatePostCard addPost={addPost} />
      <div className="row">
        {posts.map((post) => (
          <div className="col-lg-6 col-md-8 col-sm-12 mb-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeed;
