import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_login.css';

const Adminlogin = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate between pages

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents form from reloading the page

    // TODO: Add authentication logic here (validate username & password)
    
    navigate('/Home'); // ✅ Redirects to home
  };

  return (
    <div className="login-container">
      {/* Background wave shapes */}
      <div className="bg-wave top-right">
        <img className="sidevector" src="src/assets/images/sidevector.png" alt="" />
      </div>
      <div className="bg-wave bottom-left">
        <img className="bus-buddy-logo" src="src/assets/images/busbuddylogo.png" alt="" />
        <img className="bottom-left-circle" src="src/assets/images/Ellipse.png" alt="" />
      </div>

      {/* Login container */}
      <div className="login-content">
        {/* Logo and title */}
        <div className="title-section">
          <img className="buslogo" src="src/assets/images/bus.png" alt="" />
        </div>

        {/* Admin Login title */}
        <h2 className="login-title">Admin Login</h2>

        {/* Login form */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label style={{ color: 'white' }} htmlFor="username" className="input-label">
              User Name
            </label>
            <input type="text" id="username" className="input-field" />
          </div>

          <div className="form-group">
            <label style={{ color: 'white' }} htmlFor="password" className="input-label">
              Password
            </label>
            <input type="password" id="password" className="input-field" />
          </div>

          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
