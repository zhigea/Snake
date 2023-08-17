import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RulesPage from './components/RulesPage';
import RatingPage from './components/RatingPage';
import SettingsPage from './components/SettingsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="menu">
          <ul>
            <li><Link to="/">Домашняя</Link></li>
            <li><Link to="/rules">Правила</Link></li>
            <li><Link to="/rating">Рейтинг</Link></li>
            <li><Link to="/settings">Настройки</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/rules" element={<RulesPage/>} />
          <Route path="/rating" element={<RatingPage/>} />
          <Route path="/settings" element={<SettingsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
