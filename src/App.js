import React from 'react';
import logo from './logo.svg'; 
import './App.scss'; 
import Header from './Header.js'; 
import Splash from './Splash.js'; 
import Footer from './Footer.js'; 
import { BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends React.Component{ render() { return(
  <Router>
      <Header />
      <Switch>
          <Splash />
  
      </Switch>
      <Footer />
  </Router>
  
) } } 
export default App;