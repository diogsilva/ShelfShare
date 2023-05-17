import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./Navigation";


import Home from './pages/Home';
import Search from './pages/Search';
import Sell from './pages/Sell';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Notific from './pages/Notific';
import Profile from './pages/Profile';
import useToken from './Components/useToken';



function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    // -------------------------
    // BrowserRouter (uses regular URL. For example, /home or /search )
    // HashRouter (uses the hash portion of the url. For example, /#/home )
    // -------- For <route path = "" /> explanation
    <div className="app">
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/sell" component={Sell} />
            <Route path="/messages" component={Notific} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
