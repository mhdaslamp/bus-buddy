import React from 'react';
import Header from '@/components/header/header';
import StudentRegistrationForm from '@/components/regform/regform';


const Registration = () => {
  return (
    <div style={{display:'grid',}} >
      <Header />
  

      <div className='left-menu-div'>
        <div className='logo-div'>
          <img src="src/assets/images/home-logo.png" className='home-logo' alt="Home Logo" />
        </div>
        <div className='left-menu'>
          <ul className='menu-list'>
            <li key="home">
              <img className='left-icon-home' src="src/assets/images/home.png" alt="home" /> Home
            </li>
            <li key="dashboard">
              <img className='left-icon-dashboard' src="src/assets/images/dashboard.png" alt="Dashboard" /> Dashboard
            </li>
            <li key="tickets">
              <img className='left-icon-tickets' src="src/assets/images/ticket.png" alt="Ticket" /> Ticket Rates
            </li>
          </ul>
        </div>
      </div>
      <StudentRegistrationForm />
    
    </div>
  );
};

export default Registration;
