import React from 'react';
import './home.css';
import Header from '@/components/header/header';

import { useState } from 'react';
import DashboardTiles from '@/components/tiles/hometiles';
import Sidebar from './sidebar';



const Home = () => {
  
const  arr = useState(1);
const value = arr[0];
const setValue = arr[1];

  return (

<>

    <div style={{ display: 'grid', gridTemplateColumns: '0fr 3fr', height: '100vh' }}>
      {/* Sidebar on the Left (Fixed) */}
      <Sidebar />

      {/* Right Section with Header Below Sidebar */}
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '50px' }}>
        {/* Header Below Sidebar */}
        <Header />

        {/* Main Content (Form) */}
       <DashboardTiles />
      </div>
    </div>

</>
  )}

  
export default Home;
