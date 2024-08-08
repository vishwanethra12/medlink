import React, { useState } from 'react';
import { useAuth } from './AuthContext'; 
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth(); 

  const handleSignup = () => {
    signup(username, email, password); 
  };

  return (
    <div className="signup-container">
      <h2 className="medlink-heading">MedLink Signup</h2>
      <div className="input-group">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
