import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="admin-header">
      <div className="admin-greeting">Hey, Admin</div>
      <div className="admin-actions">
        <div className="admin-avatar">
          <img 
            src="src\assets\images\admin-avatar.png" 
            alt="Admin profile" 
          />
        </div>
        <button className="logout-button">
        <img style={{width:"25px",height:"25px"}} src="src\assets\images\logout.png" alt="" />
          
        </button>
      </div>
    </header>
  );
};

export default Header;