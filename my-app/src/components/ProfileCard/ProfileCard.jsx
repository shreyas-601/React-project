import React, { useState, useEffect } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  // Fetch users.json from the public folder
  useEffect(() => {
    fetch('/users.json')
      .then(response => response.json())
      .then(data => setUser(data[0])) // Assuming the first user in the JSON file is the current user
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  if (!user) return <p>Loading...</p>; // Handle loading state

  return (
    <div className="profile-card">
      <img src={user.photo} alt={user.name} className="profile-photo" />
      <h3>{user.name}</h3>
      <p>{user.headline}</p>
      <button className="connect-btn">Connect</button>
    </div>
  );
};

export default ProfileCard;
