
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import Construction from './components/Construction';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
