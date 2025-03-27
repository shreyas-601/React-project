import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import "../styles/home.css";
import postsData from "../data/posts.json";
import Navbar from "../components/Navbar";

const Home = ({username}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const updateLikes = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div>
    <Navbar />
    <div className="home-container">
      <Sidebar />
      <div className="feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} username={username} updateLikes={updateLikes} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;