import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './components-style.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage'

import './App.css';

function App() {
  return (
    
    <Router>
    <NavBar />
      <Route exact path={["/","/about"]}component={MainPage} />
      <Route exact path="/work" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
    
    </Router>
  );
}

export default App;
