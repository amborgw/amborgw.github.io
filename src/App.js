
import React, { useEffect } from 'react';
import logo from './logo.svg';
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
        <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
