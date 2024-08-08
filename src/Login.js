import React, { useState } from 'react';
import { useAuth } from './AuthContext'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 

  const handleLogin = () => {
    login(email, password); 
  };

  return (
    <div className="login-container">
      <h2 className="medlink-heading">MedLink Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
