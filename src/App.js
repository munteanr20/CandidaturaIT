import './App.css';
import React from 'react'
import Home from './pages'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
