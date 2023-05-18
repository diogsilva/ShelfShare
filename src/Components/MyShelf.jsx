import React from 'react';
import Box from '@mui/material/Box';
import { Form, FormControl, InputGroup, Container, Row, Col } from "react-bootstrap"
import { Grid, Typography } from "@mui/material";
import BookShelf from '../Components/BookShelf.js';

const bookData = require("../sample/books.json");
const MyShelf = () =>{
    return (
    <div>
    <Container className='grid'>
        <Row >
          <Typography variant={'h4'} sx={{paddingBottom:"25px" ,fontFamily:'Poppins'}} >FAVOURITES:</Typography>
          <Col>
            <div className="section-body">
              <BookShelf books={bookData.slice(40,44)} picHeight={220} />
            </div>
          </Col>
        </Row>
        </Container>
        </div>
      );
};

export default MyShelf;
