import React from 'react';
import 'react-bootstrap' ;
//import for the search bar
import {Form,FormControl,InputGroup,Container,Row,Col} from "react-bootstrap"

import "./Search.css";
import Collapsible from '../Components/Collapsible_Search';


import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Search Screen



const Search = (props) => {
  const Geners = ['Art\n', 'Biographies\n', 'Comics\n', 'List4\n', 'List5\n'];
  const Authors = ["Sally Ronney\n", "Kelly reid\n", "lista3\n", "List4\n", "List5\n"];
    

  return (
    <div className='Search_a'> 
      
      <Container className="mt" >
        {/*
        <Row >
          <Col>
          < nav className="navbar fixed-top " role="navigation">
            <div className="container-fluid">
              <a className="navbar-brand" href="/home">Shelf Share</a>  
            </div>
          </nav>    
          </Col>
        </Row>
        */}
        <Row>
          <Col >
            <Form className="d">
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                  <path
                      fill-rule="evenodd"
                      d="M9.5 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM1 9.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0z"
                  />
                  <path
                      fill-rule="evenodd"
                      d="M16.853 16.854a.5.5 0 0 0 .707 0l3.793-3.793a.5.5 0 0 0 0-.707l-3.793-3.793a.5.5 0 0 0-.707.707L19.293 12H10.5a.5.5 0 0 0 0 1h8.793l-2.646 2.646a.5.5 0 0 0 0 .707z"
                  />
                  </svg>
                </InputGroup.Text>
                <FormControl type="search" className="me-4" placeholder="Search" />
              </InputGroup>  
            </Form>
          </Col>
        </Row>
      </Container>
    <Container className='Search-options'>
      <div className="Collapsible">
        <Collapsible label="Geners"  >
        <div className="line-break"  >{
                  Geners.map(str => {
                      return(`${str}`)
                  })
              }</div>
        </Collapsible>
          <hr />
        <Collapsible label="Authors"  >
        <div className="line-break"  >{
                  Authors.map(str => {
                      return(`${str}`)
                  })
              }</div>
        </Collapsible>
          <hr />
      </div>
    </Container> 
    <p></p>
    <p></p>
  </div> 
  )
};

export default Search;