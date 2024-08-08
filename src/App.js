import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Tasks from './Tasks';

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/" element={<Login />} /> {/* Default route */}
    </Routes>
  );
};

export default App;
