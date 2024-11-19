import styled, { keyframes } from 'styled-components';

// Keyframes for subtle animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const hoverGlow = keyframes`
  from {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  to {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

// Header container (Navbar)
export const NavBar = styled.nav`
  background: linear-gradient(90deg, #e0eafc, #cfdef3); /* Gentle blue gradient */
  color: ${props => (props.dark ? "#222" : "#555")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

// Logo container
export const NavBrand = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #336699; /* Gentle navy blue */
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  margin-right: auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #779ecb; /* Soft pastel blue */
    animation: ${hoverGlow} 0.5s forwards;
  }
`;

// Centered NavItems container
export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-grow: 1;
`;

// Individual NavItem (links)
export const NavItem = styled.li`
  a {
    display: inline-block;
    padding: 10px 16px;
    color: ${props => (props.active ? "#5a5c61" : "#336699")}; /* Gentle navy for default */
    background-color: ${props => (props.active ? "#d4ebf2" : "transparent")}; /* Light blue for active */
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border-radius: 6px;
    font-size: 1rem;

    &:hover {
      background-color: #eaf6f9; /* Very soft light blue */
      color: #5a5c61; /* Neutral gray */
      transform: translateY(-2px); /* Gentle hover effect */
    }
  }
`;

// User Profile Section (if logged in)
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
  font-size: 1rem;
  color: #555;
  text-decoration: None;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #cfdef3; /* Light border matching navbar */
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle hover shadow */
    }
  }

  span {
    font-weight: 500;
  }

  &:hover {
    color: #779ecb; /* Soft pastel blue */
  }
`;

// Mobile Menu Toggle Button
export const NavbarToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #336699;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  &:hover {
    color: #779ecb; /* Softer blue */
  }

  @media (max-width: 768px) {
    display: block;
    animation: ${fadeIn} 0.4s ease-in-out;
  }
`;
