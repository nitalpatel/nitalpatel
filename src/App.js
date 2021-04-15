import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import logo from './logo.svg';
import AboutMe from './components/pages/AboutMe';
import Services from './components/pages/Services';
import Products from './components/pages/Products';


function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />  
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/about-me' component={AboutMe} />
      </Switch>
    </Router>
  </>  
  );
}






export default App;
