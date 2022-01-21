import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import Pdf from './components/AlexYuResume.pdf'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
