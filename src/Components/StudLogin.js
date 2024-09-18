// import React, { useState } from 'react';
// import './LoginStyle.css';

// const StudLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/login', { // Adjust the URL to your backend endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Handle successful login, e.g., redirect or update UI
//         window.location.href = './Components.Student.js'; // Example redirect to a dashboard page
//       } else {
//         setError(data.message || 'Invalid username or password');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Student Login</h1>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button className="LoginButton" type="submit">Login</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default StudLogin;


import React, { useState } from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import Student from './Student.js'
import useAuth from '../hooks/useAuth.js'
const StudLogin = ({login}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Username:', username); // Debugging statement
    console.log('Password:', password); // Debugging statement
  
    // Hard-coded username and password for testing
    const validUsername = 'student';
    const validPassword = 'pass';
  
    if (username === validUsername && password === validPassword) {
      // Handle successful login
      login(); // Call the login function to update authentication state
      navigate('/student');
      } else {
      setError('Invalid username or password');
    }
  };
  
  return (
    <div className="form-container">
      <h1>Student Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="LoginButton" type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default StudLogin;

