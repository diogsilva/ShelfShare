import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { Typography, Button } from "@mui/material";
import BookShelf from '../Components/BookShelf.js';
import SendIcon from '@mui/icons-material/Send';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const bookData = require("../sample/books.json");
const MyOrders = () => {
    return (
        <div classname="body">
            <Container>
               { /** ----------- header ----------- */}
                <Container className='Header_containers' style={{ paddingTop: "2%",borderBottom: "white solid 1px" }}>
                    <Row>
                        <Col xs={4} >
                            <img
                                src="https://github.com/diogsilva/ShelfShare/blob/main/public/img/livros/a-la-recherche-du-temps-perdu.jpg?raw=true"
                                alt="Capa"
                                style={{
                                    height: 200,
                                    width: 150,
                                    paddingLeft:"2%"
                                }}
                            />
                        </Col>
                        <Col xs={5} className="name_user" >
                            <Typography sx={{ fontFamily: 'Poppins' }} variant="h5"><b>À la recherche du temps persu</b></Typography>
                            <Typography sx={{ fontFamily: 'Poppins'}} ><b>About:</b></Typography>

                            <Typography sx={{ fontFamily: 'Poppins', paddingTop: "1%" }} ><b>Type:</b>Sell </Typography>
                            <Typography sx={{ fontFamily: 'Poppins' }} ><b>Price:</b> 29.99$</Typography>
                            <Typography sx={{ fontFamily: 'Poppins' }} ><b>Condition:</b>Good Shape </Typography>
                            <Typography sx={{ fontFamily: 'Poppins' }} variant="h5"><b>Status:</b>Completed </Typography>
                        </Col>
                    </Row>
                </Container>
                
            </Container>
        </div>
    );
};

export default MyOrders;
