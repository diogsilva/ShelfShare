import React from 'react';
import './Navegation.css';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faCake, faUmbrella, faAdd, faCommenting } from '@fortawesome/free-solid-svg-icons';
// esta parte é para quando o site for aberto em tablet ou telemovel parecer uma app
// faz o upload dos icons do menu
const tabs = [{
  route: "/home",
  icon: faCake,
  label: "cake_home"
},{
  route: "/search",
  icon: faSearch,
  label: "Search"
},{
  route: "/sell",
  icon: faAdd,
  label: "Sell"
},{
  route: "/messages", // nome da pahina em cima np link
  icon: faCommenting,
  label: "messages"
},{
  route: "/profile",
  icon: faUserCircle,
  label: "profile"
}]
// ----- ate aqui -----
const Navigation = (props) => {

  return (
    <div>
      {/* -----------       TOP NavBar      ----------*/}
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/home">Shelf Share</a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/search" className="nav-link">
                  Search 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sell" className="nav-link">
                  Sell
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/messages" className="nav-link">
                  Massages 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </NavItem>
              <button className="button-login" > Login </button>
             
              
            </Nav>
        </div>
      </nav>

      {/* -----------       BOTTOM NavBar      ----------*/}
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      
      <Nav className="bottom-navbar">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav> 
      
      
    </nav>
    </div>
  )
};

export default Navigation;