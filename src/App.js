import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";


import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Sell from './pages/Sell';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
  return (
    // -------------------------
    // BrowserRouter (uses regular URL. For example, /home or /search )
    // HashRouter (uses the hash portion of the url. For example, /#/home )
    // -------- For <route path = "" /> explanation
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Switch>  
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/sell" component={Sell} />
          <Route path="/messages" component={Messages} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
