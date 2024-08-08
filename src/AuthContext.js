// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    // This is where you'd normally make an API call to log in the user
    // For simplicity, we'll assume the login is successful if email and password are provided
    if (email && password) {
      setUser({ email });
      navigate('/tasks');
    } else {
      alert('Please provide both email and password');
    }
  };

  const signup = (username, email, password) => {
    // This is where you'd normally make an API call to sign up the user
    // For simplicity, we'll assume the signup is successful if all fields are provided
    if (username && email && password) {
      setUser({ username, email });
      navigate('/tasks');
    } else {
      alert('Please fill in all fields');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
