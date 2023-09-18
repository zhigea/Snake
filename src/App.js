import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RulesPage from './components/RulesPage';
import RatingPageHtml from './components/RatingPageHtml';
import RatingPageMui from './components/RatingPageMui';
import SettingsPage from './components/SettingsPage';
import './App.css';
import NavBar from  './components/NavBar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/rules" element={<RulesPage/>} />
          <Route path="/rating-html" element={<RatingPageHtml/>} />
          <Route path="/rating-mui" element={<RatingPageMui/>} />
          <Route path="/settings" element={<SettingsPage/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;