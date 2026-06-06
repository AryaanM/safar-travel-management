// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  // Simulated user data
  const simulatedProfileData = {
    name: "Aryaan Mahapatra",
    email: "aryaan123@gmail.com",
    phone: "9970606544",
    address: "East City Sunstreet",
    dateOfBirth: "2005-04-05"
  };

  useEffect(() => {
    // Simulate a delay to mimic fetching data
    const timer = setTimeout(() => {
      setProfile(simulatedProfileData);
    }, 1000); // Simulate a 1 second delay for loading

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="profile-container">
      {profile ? (
        <div className="profile-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Profile" 
            className="profile-image"
          />
          <h1>{profile.name}</h1>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Address: {profile.address}</p>
          <p>Date of Birth: {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;


