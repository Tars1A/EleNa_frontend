
import React from 'react';
import {BrowserRouter as Router} from  'react-router-dom' 
import Home from './pages/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
