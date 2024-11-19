import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookies';
import { useNavigate } from 'react-router-dom';

// Main profile container (centered layout)
const ProfileContainer = styled.div`
  width: 400px;
  margin: 80px auto; /* Centered both horizontally and vertically */
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); /* Deep shadow for depth */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out; /* Smooth scale transition on hover */

  &:hover {
    transform: scale(1.05); /* Slight scale effect on hover */
  }
`;

// Avatar styling (circular with a border)
const AvatarContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Center the avatar container */
  align-items: center; /* Center the avatar vertically */
`;

const AvatarImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover; /* Ensures the image covers the container while keeping aspect ratio */
  border: 4px solid #22aaff; /* Blue border for a pop of color */
`;

// Default person placeholder image (if no avatar)
const DefaultAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  background-image: url('https://www.w3schools.com/howto/img_avatar.png'); /* Placeholder image */
  background-size: cover;
  background-position: center;
`;

// Title of the profile page
const ProfileTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
`;

// User info container (name, email)
const UserInfo = styled.div`
  width: 100%;
  margin-top: 15px;
`;

// Labels and User Info Styling
const Label = styled.p`
  font-size: 16px;
  color: #888;
  margin: 5px 0;
  text-align: left;
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserInfoText = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
`;

// User Info styling for each piece of info
const UserFullName = styled.div`
  text-align: left;
`;

const UserName = styled.div`
  text-align: left;
`;

const UserEmail = styled.div`
  text-align: left;
`;

// Logout button styling
const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  background-color: #22aaff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077cc; /* Darken the blue on hover */
  }
`;

const UserProfile = () => {
  const userId = Cookies.getItem('userId');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    if (!userId) {
      setError('No user ID found in cookies');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5100/userprofile/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUser(data); // Set user data
      } catch (error) {
        setError(error.message); // Handle error
      }
    };

    fetchUserData();
  }, [userId]);

  // Logout function to clear cookies and navigate to login page
  const handleLogout = () => {
    Cookies.removeItem('userId'); // Clear the userId cookie
    navigate('/login'); // Navigate to the login page
  };

  // Handle loading or error state
  if (!user && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProfileContainer>
      {/* Profile Title */}
      <ProfileTitle>User Profile</ProfileTitle>

      {/* Avatar Section */}
      <AvatarContainer>
        {user.avatar ? (
          <AvatarImage src={user.avatar} alt="User Avatar" />
        ) : (
          <DefaultAvatar></DefaultAvatar> // Default Placeholder for user avatar
        )}
      </AvatarContainer>

      {/* User Info Section */}
      <UserInfo>
        {/* Display Full Name */}
        <UserFullName>
          <Label>Full Name</Label>
          <UserInfoText>{`${user.firstname} ${user.lastname}`}</UserInfoText>
        </UserFullName>

        {/* Display Username */}
        <UserName>
          <Label>Username</Label>
          <UserInfoText>{user.username}</UserInfoText>
        </UserName>

        {/* Display Email */}
        <UserEmail>
          <Label>Email</Label>
          <UserInfoText>{user.email}</UserInfoText>
        </UserEmail>

        {/* Logout Button */}
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserInfo>
    </ProfileContainer>
  );
};

export default UserProfile;
