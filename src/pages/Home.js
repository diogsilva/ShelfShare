import React, { useState } from 'react';
import "./Home.css";
import { Form, FormControl, InputGroup, Container, Row, Col } from "react-bootstrap"
import { Grid, Typography } from "@mui/material";
import BookShelf from '../Components/BookShelf.js';
import SearchComponent from '../Components/SearchComponent';
import { fontFamily } from '@mui/system';

const bookData = require("../sample/books.json");

// Home Screen
const Home = (props) => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  return (
    <div className='comp'>
      <Container className="mt" >
        <Row>
          <Col>
            <Form className="d">
              <SearchComponent value={value} onChange={handleChange} />
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className='grid'>
        <Row>
          <Typography variant={'h4'} sx={{paddingBottom:"25px" ,fontFamily:'Poppins'} } >BOOKS RECOMENDED TO YOU: </Typography>
          <Col>
            <div className="section-body">
              <BookShelf books={bookData} picHeight={220} />
            </div>
          </Col>
        </Row>
        </Container>
        <Container className='grid'>
        <Row>
          <Typography variant={'h4'} sx={{paddingBottom:"25px" ,fontFamily:'Poppins'}} >FAVORITE BOOKS IN SHOWCASE:</Typography>
          <Col>
            <div className="section-body">
              <BookShelf books={bookData.slice(10,18)} picHeight={220} />
            </div>
          </Col>
        </Row>
        </Container>
        <Container className='grid'>
        <Row>
          <Typography variant={'h4'} sx={{paddingBottom:"25px" ,fontFamily:'Poppins'}} >TRADES THAT YOU MIGHT LIKE:</Typography>
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

