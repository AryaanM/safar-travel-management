import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Hotels from './components/Hotels';
import PackageDisplay from './components/PackageDisplay';
import BookPackage from './components/BookPackage';
import LoginPage from './components/LoginPage'; 
import Destinations from './components/Destinations'; // Import added
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/destinations" element={<Destinations />} /> {/* Route added */}
        <Route path="/book-package" element={<PackageDisplay />} />
        <Route path="/book-package/:packageId" element={<BookPackage />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;