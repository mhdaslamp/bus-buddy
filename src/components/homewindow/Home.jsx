import React from 'react';
import './Home.css';



const Home = () => {
  return (
    

  <div className='left-menu-div'>
    <div className='logo-div'>
        <img src="src\assets\images\home-logo.png" className='home-logo' alt="" />
    </div>
    <div className='left-menu'>
      <ul className='menu-list'>
        <li> <img className='left-icon-home' src="src/assets/images/home.png" alt="home" />Home</li>
        <li> <img className='left-icon-dashboard'  src="src/assets/images/dashboard.png" alt="Dashboard" />Dashboard</li>
        <li> <img className='left-icon-tickets' src="src\assets\images\ticket.png" alt="Ticket" />Ticket Rates</li>
      </ul>
    </div>
  </div>

    
  
  );
};

export default Home;