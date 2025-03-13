import React from 'react';
import './home.css';

const Sidebar = ({ setCurrentComponent }) => {
  return (
    <>
      <div className='left-menu-div'>
        <div className='logo-div'>
          <img src="src/assets/images/home-logo.png" className='home-logo' alt="Home Logo" />
        </div>

        <div className='left-menu'>
          <ul className='menu-list'>
            <li key="home">
              <button className='menu-button' onClick={() => setCurrentComponent('Home')}>
                <img className='left-icon-home' src="src/assets/images/home.png" alt="home" /> Home
              </button>
            </li>
            <li key="dashboard">
              <button className='menu-button' onClick={() => setCurrentComponent('Dashboard')}>
                <img className='left-icon-dashboard' src="src/assets/images/dashboard.png" alt="Dashboard" /> Dashboard
              </button>
            </li>
            <li key="tickets">
              <button className='menu-button' onClick={() => setCurrentComponent('Tickets')}>
                <img className='left-icon-tickets' src="src/assets/images/ticket.png" alt="Ticket" /> Ticket Rates
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='home-cotenloader'>
        <div style={{ zIndex: '1', position: 'relative' }}>
         
        </div>
      </div>
    </>
  );
};

export default Sidebar;