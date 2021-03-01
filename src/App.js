import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (

     <Router>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
      <Switch>
      
      </Switch>
    </Router>

  );
}
