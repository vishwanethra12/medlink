import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskManager from './components/TaskManager';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to the Task Manager</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskManager />
    </div>
  );
};

export default HomePage;
