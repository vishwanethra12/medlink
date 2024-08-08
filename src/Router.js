import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskManager from './components/TaskManager';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/s-ignup" element={<Signup />} />
      <Route path="/tasks" element={<TaskManager />} />
    </Routes>
  );
};

export default AppRouter;
