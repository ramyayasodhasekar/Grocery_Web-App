import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';
import { NavBar, NavItems, NavItem, NavbarToggle, NavBrand, UserProfile } from './styledComponents';

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const token = Cookies.getItem("jwtToken");
  const adminToken = localStorage.getItem("adminJwtToken");

  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(!!adminToken);
    if (token) {
      // Fetch user data (this can be replaced by an actual API call)
      const userData = {
        name: 'USER', // Example name
        avatar: 'https://th.bing.com/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' // Example avatar
      };
      setUser(userData);  // Set user data if logged in
    }
  }, [token, adminToken]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      Cookies.removeItem("adminJwtToken");
      Cookies.removeItem("jwtToken");
      localStorage.clear();
      setUser(null); // Reset user state to null
      navigate("/login");
    }
  };

  const renderNavLinks = (isAdminView) => (
    <>
      <NavItem active={window.location.pathname === '/'}>
        <NavLink to={isAdminView ? "/admin/dashboard" : "/"}>Home</NavLink>
      </NavItem>
      <NavItem active={window.location.pathname === '/my-cart'}>
        <NavLink to={isAdminView ? "/admin/all-products" : "/my-cart"}>{isAdminView ? "Products" : "Cart items"}</NavLink>
      </NavItem>
      <NavItem active={window.location.pathname === '/my-orders'}>
        <NavLink to={isAdminView ? "/admin/orders" : "/my-orders"}>Orders placed</NavLink>
      </NavItem>
      <NavItem active={window.location.pathname === '/my-history'}>
        <NavLink to={isAdminView ? "/admin/users" : "/my-history"}>{isAdminView ? "Users" : "Ordered History"}</NavLink>
      </NavItem>

      {isAdminView || token ? (
        <NavItem>
          <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
        </NavItem>
      ) : (
        <NavItem>
          <NavLink to="/login">Login/SignUp</NavLink>
        </NavItem>
      )}
    </>
  );

  return (
    <NavBar>
      <NavBrand>
        <Link to={isAdmin ? '/admin/dashboard' : '/'}>Grocery Stores</Link>
      </NavBrand>
      <NavbarToggle>
        <i className="fas fa-bars"></i>
      </NavbarToggle>
      <NavItems>
        {renderNavLinks(isAdmin)}
      </NavItems>

      {/* Render User Profile only if user is logged in */}
      {user && (
        <UserProfile>
          <Link to={`/profile`}>
          <img src={user.avatar} alt="User Avatar" />
          <span>{user.name}</span>
          </Link>
        </UserProfile>
      )}
    </NavBar>
  );
};

export default Header;
