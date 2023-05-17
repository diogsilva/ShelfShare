import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Navigation from "./Navigation";


import Home from './pages/Home';
import Search from './pages/Search';
import Sell from './pages/Sell';
import Notific from './pages/Notific';
import Profile from './pages/Profile';

function App() {

  return (
    // -------------------------
    // BrowserRouter (uses regular URL. For example, /home or /search )
    // HashRouter (uses the hash portion of the url. For example, /#/home )
    // -------- For <route path = "" /> explanation
    <div className="app">
      <div>
        <BrowserRouter>
          <Navigation/>
          {/*<Home /> // dar set visibel and set invisible para não se repetir ao andar pelo nav
          https://www.youtube.com/watch?v=UGSN6o29fPo 
          em que o default é visivel e depois ao clicar n'outro button fica invisivel ao assim*/}
          <Switch> 
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
