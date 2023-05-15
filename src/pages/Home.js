import React from 'react';
import "./Home.css";
import {Form,FormControl,InputGroup,Container,Row,Col} from "react-bootstrap"
import { Grid } from "@mui/material"
import BookShelf from '../Components/BookShelf.js';

const bookData = require("../sample/books.json");

// Home Screen
const Home = (props) => {

  return (
    <div className='comp'>
      <Container className="mt" >
      <Row>
          <Col>
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
      <Container className='grid'>
        <Row>
          <p className="section-header">BOOKS RECOMENDED TO YOU:</p>
          <Col>
            <div className="section-body">
                <BookShelf books={bookData} />
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

