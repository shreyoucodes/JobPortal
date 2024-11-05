// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`/user/${userId}`);
      setProfile(response.data);
    };
    fetchProfile();
  }, [userId]);

  return (
    <div>
      <h1>
        {profile.first_name} {profile.last_name}
      </h1>
      <p>{profile.email}</p>
      <p>{profile.location}</p>
    </div>
  );
};

export default UserProfile;
