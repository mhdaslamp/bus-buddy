import React from 'react';
import './home.css';
import Header from '@/components/header/header';

import { useState } from 'react';
import DashboardTiles from '@/components/tiles/hometiles';
import Sidebar from './sidebar';
import StudentRegistrationForm from '@/components/regform/regform';



const Home = () => {
  
  const [currentComponent, setCurrentComponent] = useState('Home');

  return (

<>

    <div style={{ display: 'grid', gridTemplateColumns: '0fr 3fr', height: '100vh' }}>
      {/* Sidebar on the Left (Fixed) */}
      <Sidebar setCurrentComponent={setCurrentComponent} />

      {/* Right Section with Header Below Sidebar */}
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '50px' }}>
        {/* Header Below Sidebar */}
        <Header />
        
     
        {/* Main Content (Form) */}
        {currentComponent === 'Home' && <DashboardTiles />}
          {currentComponent === 'Dashboard' && <StudentRegistrationForm />}
          {currentComponent === 'Tickets' && <h2>Ticket Rates Page</h2>}
      </div>
    </div>

</>
  )}

  
export default Home;
