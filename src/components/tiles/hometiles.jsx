import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardTiles.css';

const DashboardTiles = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const tiles = [
    {
      id: 1,
      title: 'Student Registration',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L3 9L12 14L21 9L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 14L12 19L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: true,
      route: '/register' // ✅ Set route for navigation
    },
    {
      id: 2,
      title: 'Ticket Renewal',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12L12 8M12 8L8 12M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: true
    },
    {
      id: 3,
      title: 'Manage Students',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14675 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.18822C20.0665 4.44561 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55438 19.9598 5.81177C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: true
    },
    {
      id: 3,
      title: 'Transaction History',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14675 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.18822C20.0665 4.44561 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55438 19.9598 5.81177C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      active: true
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-tiles">
        {tiles.map((tile) => (
          <div 
            key={tile.id}
            className={`dashboard-tile ${tile.active ? 'active' : 'inactive'}`}
            onClick={() => tile.route && navigate(tile.route)} // ✅ Navigate on click
            style={{ cursor: tile.route ? 'pointer' : 'default' }} // Change cursor if clickable
          >
            {tile.icon && <div className="tile-icon">{tile.icon}</div>}
            {tile.title && <p className="tile-title">{tile.title}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTiles;
