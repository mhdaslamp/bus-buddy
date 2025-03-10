import React from 'react';
import Header from '@/components/header/header';
import StudentRegistrationForm from '@/components/regform/regform';
import Sidebar from '@/components/homewindow/sidebar';

const Registration = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '0fr 3fr', height: '100vh' }}>
      {/* Sidebar on the Left (Fixed) */}
      <Sidebar />

      {/* Right Section with Header Below Sidebar */}
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '50px' }}>
        {/* Header Below Sidebar */}
        <Header />

        {/* Main Content (Form) */}
        <StudentRegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
