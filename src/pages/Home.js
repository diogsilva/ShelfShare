import React,{useState} from 'react';
import "./Home.css";
import {Form,FormControl,InputGroup,Container,Row,Col} from "react-bootstrap"
import { Grid } from "@mui/material";
import BookShelf from '../Components/BookShelf.js';
import SearchComponent from '../Components/SearchComponent';

const bookData = require("../sample/books.json");

// Home Screen
const Home = (props) => {
  const [value,setValue] = useState('');
  const handleChange = event => setValue(event.target.value);

  return (
    <div className='comp'>
      <Container className="mt" >
      <Row>
          <Col>
            <Form className="d">
              <SearchComponent value={value} onChange={handleChange}/>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className='grid'>
        <Row>
          <p className="section-header">BOOKS RECOMENDED TO YOU:</p>
          <Col>
            <div className="section-body">
                <BookShelf books={bookData} picHeight={350}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>

        <p className="section-header">FAVORITE BOOKS IN SHOWCASE:</p>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>

        <p className="section-header">TRADES THAT YOU MIGHT LIKE:</p>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>


      </Container>
    </div>
  )
};

export default Home;

