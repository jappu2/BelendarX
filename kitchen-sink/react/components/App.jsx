// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../UserContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CalendarPage from '../pages/Calendar';
import AddTask from '../pages/AddTask';
import TaskDetails from '../pages/TaskDetails';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<CalendarPage />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task-details/:taskId" element={<TaskDetails />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
