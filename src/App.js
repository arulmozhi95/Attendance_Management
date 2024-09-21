import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import StudLogin from './Components/StudLogin';
import StaffLogin from './Components/StaffLogin';
import Student from './Components/Student';
import Staff from './Components/Staff';
import { useAuth } from './hooks/useAuth.js'; // Ensure this path is correct

export default function HomePage() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div
    className='back'
    // style={{
    //   background: 'linear-gradient(to right, #fbc2eb, #a6c0fe)'
    // }}
  >
   
  
      <h1 className='title' align='center'>Attendance Tracking System</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="studlogin" element={<StudLogin login={login} />} />
        <Route path="stafflogin" element={<StaffLogin login={login} />} />
        <Route path="student" element={isAuthenticated ? <Student /> : <Navigate to="/studlogin" />} />
        <Route path="staff" element={isAuthenticated ? <Staff /> : <Navigate to="/stafflogin" />} />
      </Routes>
      {isAuthenticated && <button  onClick={logout} align='center'>Logout</button>}
    </div>
  );
}
