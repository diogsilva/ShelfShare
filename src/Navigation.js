import React from 'react';
import './Navegation.css';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faAdd, faBell ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// esta parte é para quando o site for aberto em tablet ou telemovel parecer uma app
// faz o upload dos icons do menu
const tabs = [{
  route: "/home",
  icon: faHome,
  label: "Home"
}, /*{
  route: "/search",
  icon: faSearch,
  label: "Search"
}, */
{
  route: "/sell",
  icon: faShoppingCart,
  label: "Sell"
}, {
  route: "/messages", // nome da pahina em cima np link
  icon: faBell,
  label: "Notification"
}, {
  route: "/profile",
  icon: faUserCircle,
  label: "Profile"
}]
// ----- ate aqui -----
const Navigation = (props) => {

  return (
    <div>
      {/* -----------       TOP NavBar      ----------*/}
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home" style={{ color: 'white' }}><h2>ShelfShare</h2></a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/sell" className="nav-link" style={{ color: 'white' }}>
                  <AddShoppingCartIcon fontSize="large" />

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/messages" className="nav-link" style={{ color: 'white' }}>
                <NotificationsIcon fontSize="large" />

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" className="nav-link" style={{ color: 'white' }}>
                <AccountCircleIcon fontSize="large" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Settings" className="nav-link" style={{ color: 'white' }}>
                <Settings fontSize="large" />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>

      {/* -----------       BOTTOM NavBar      ----------*/}
      <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">

        <Nav className="bottom-navbar">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active" align="center">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon  size="lg" icon={tab.icon}  />
                      {/*<div className="bottom-tab-label" align="center" color='white'>{tab.label}</div>*/}
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