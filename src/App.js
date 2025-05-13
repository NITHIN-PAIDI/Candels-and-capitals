import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Dashboard from './Dashboard/dashboard';
import Login from './sign-in/sign-in';
import AdminPanel from './Admin-panel/admin'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/course/:id" element={<CourseDetails />} /> */}
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
