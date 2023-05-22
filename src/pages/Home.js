import React from 'react';
import "./Home.css";
import {  Container, Row, Col } from "react-bootstrap"
import { Typography } from "@mui/material";
import BookShelf from '../Components/BookShelf.js';

import Search from"./Search";
const bookData = require("../sample/books.json");

// conection to the login page
const Home = (props) => {
  return (
    <div className='comp' style={{paddingBottom:'10%'}}>
      {/* -------------- Search menu --------------*/}
      <Container className="mt" >
        <Search />
      </Container>
      {/* -------------- Recomended --------------*/}
      <Container className='grid'>
        <Row>
          <Typography  sx={{paddingBottom:"25px" ,fontFamily:'Poppins'} } ><b>BOOKS RECOMMENDED FOR YOU: </b></Typography>
          <Col>
            <div className="section-body">
              <BookShelf books={bookData} picHeight={220} />
            </div>
          </Col>
        </Row>
        </Container>
        <Container className='grid'>
        <Row>
          <Typography sx={{paddingBottom:"25px" ,fontFamily:'Poppins'}} ><b>FAVORITE BOOKS IN SHOWCASE:</b></Typography>
          <Col>
            <div className="section-body">
              <BookShelf books={bookData.slice(10,18)} picHeight={220} />
            </div>
          </Col>
        </Row>
        </Container>
        <Container className='grid'>
        <Row>
          <Typography sx={{paddingBottom:"25px" ,fontFamily:'Poppins'}} >TRADES THAT YOU MIGHT LIKE:</Typography>
          <Col>
            <div className="section-body">
              <BookShelf books={bookData.slice(31,39)} picHeight={220} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Home;

