import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import ValentinePage from './components/Pages/ValentinePage'

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/valentines-day-2026';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/valentines-day-2026' element={<ValentinePage/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
