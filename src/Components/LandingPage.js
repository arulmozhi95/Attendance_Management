import React from 'react';
import './LandingPage.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import techImage from './tech.webp';
function LandingPage() {
  const location = useLocation();

  return (
    <>
      <nav>
        <ul>
          <li className={location.pathname === '/studlogin' ? 'active' : ''}>
            <Link to="/studlogin">Stud Login</Link>
          </li>
          <li className={location.pathname === '/stafflogin' ? 'active' : ''}>
            <Link to="/stafflogin">Staff Login</Link>
          </li>
        </ul>
      </nav>
      <img src={techImage} alt="tech image"
            style={{ 
              width:1500, 
              height: 'auto', 
              borderRadius: '10px', 
              alignItems:'center',
            }}  />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}

export default LandingPage;
