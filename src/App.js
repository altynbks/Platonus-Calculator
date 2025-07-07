import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title-container">
          <h1>Калькулятор оценок Platonus</h1>
        </div>
        <div className="description-container">
          <p>Приложение для расчета оценок в системе Platonus</p>
          <p>Выберите калькулятор из меню</p>
          </div>
      </div>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
      <footer className="footer">
        <div className="footer-content">
          <span>© 2025 Platonus Calculator</span>
          <span className="footer-sep">|</span>
          <a href="https://github.com/altynbks/Platonus-Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;