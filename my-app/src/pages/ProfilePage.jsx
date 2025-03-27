import React, { useState } from "react";
import "../styles/profile.css";
import postsData from "../data/posts.json";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Profile = ({username}) => {
  const [bio, setBio] = useState(localStorage.getItem("userBio") || "Your bio...");
  const [jobTitle, setJobTitle] = useState(localStorage.getItem("jobTitle") || "Your job title...");
  
  const handleBioChange = (e) => {
    setBio(e.target.value);
    localStorage.setItem("userBio", e.target.value);
  };
  
  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
    localStorage.setItem("jobTitle", e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-content">
          <div className="profile-header">
            <img src="../assets/profile-pic.jpg" alt="Profile" className="profile-pic" />
            <h2>{username}'s Profile</h2>
            <input 
              type="text" 
              value={jobTitle} 
              onChange={handleJobTitleChange} 
              className="job-title-input" 
            />
            <textarea 
              value={bio} 
              onChange={handleBioChange} 
              className="bio-input" 
            />
          </div>
          <h3>Your Posts</h3>
          <div className="user-posts">
            {postsData.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;