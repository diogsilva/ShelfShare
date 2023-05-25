import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { Typography, Button } from "@mui/material";
import BookShelf from '../Components/BookShelf.js';
import SendIcon from '@mui/icons-material/Send';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const bookData = require("../sample/books.json");
const MyShelf = () => {
  return (
    <div>
      <Container className='grid'>
        <Row >
          <Typography variant={'h6'} sx={{ paddingBottom: "2%", fontFamily: 'Poppins' }} >FAVOURITES:</Typography>
          <Col>
            <div className="section-body" style={{ paddingBottom: "1%" }}>
              <BookShelf books={bookData.slice(40, 50)} picHeight={220} />
            </div>
          </Col>
        </Row>
        <Row >
          <Typography variant={'h6'} sx={{ borderTop: "white solid 1px", paddingTop: "2%", paddingBottom: "2%", fontFamily: 'Poppins' }} >OFFERS:</Typography>
          <Col>
            {/** ------------------- offers Containers --------------------- */}
            <div className="section-body" style={{ paddingBottom: "2%" }}>
              <Container className='Msg_containers' style={{ paddingTop: "2%", border: "Grey solid 1px" }}>
                <Row>
                  <Col xs={2} >
                    <img
                      src="https://github.com/diogsilva/ShelfShare/blob/main/public/img/livros/a-la-recherche-du-temps-perdu.jpg?raw=true"
                      alt="Capa"
                      style={{
                        height: 200,
                        width: 150,
                      }}
                    />
                  </Col>
                  <Col xs={7} className="name_user">
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="h6"><b>À la recherche du temps persu</b></Typography>
                    <Typography sx={{ fontFamily: 'Poppins', paddingTop: "1%" }} ><b>Type:</b>Trade </Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Price:</b> -</Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Condition:</b>Good Shape </Typography>
                  </Col>
                  <Col xs={1} className="Reply">
                    <Button variant="contained" endIcon={<SendIcon />} style={{ marginTop: "100%" }}>Reply</Button>
                  </Col>
                </Row>
              </Container>
              <Container className='Mgs_containers' style={{ paddingTop: "2%", border: "Grey solid 1px", paddingBottom: "2%" }}>
                <Row >
                  <Col xs={2} >
                    <img
                      src="https://github.com/diogsilva/ShelfShare/blob/main/public/img/livros/a-la-recherche-du-temps-perdu.jpg?raw=true"
                      alt="Capa"
                      style={{
                        height: 200,
                        width: 150,
                      }}
                    />
                  </Col>
                  <Col xs={7} className="name_user">
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="h6"><b>À la recherche du temps persu</b></Typography>
                    <Typography sx={{ fontFamily: 'Poppins', paddingTop: "1%" }} ><b>Type:</b>Trade </Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Price:</b> -</Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Condition:</b>Ok Shape </Typography>
                  </Col>
                  <Col xs={1} className="Reply">
                    <Button variant="contained" endIcon={<SendIcon />} style={{ marginTop: "100%" }}>Reply</Button>
                  </Col>
                </Row>
              </Container>
              <Container style={{ borderBottom: "white solid 1px" }}>
                <Button classname="mt-b" style={{ decoration: "none", backgroundColor: "bisque", color: "#494949", paddingLeft: "99%" }} >
                  <OpenInFullIcon />
                </Button>
              </Container>
            </div>
          </Col>
        </Row>
         {/** ------------------- Listings Containers --------------------- */}
        <Row >
          <Typography variant={'h6'} sx={{ paddingBottom: "2%", fontFamily: 'Poppins' }} >LISTINGS:</Typography>
          <Col>
          <div className="section-body" style={{ paddingBottom: "2%" }}>
              <Container className='Msg_containers' style={{ paddingTop: "2%", border: "Grey solid 1px" }}>
                <Row>
                  <Col xs={2} >
                    <img
                      src="https://github.com/diogsilva/ShelfShare/blob/main/public/img/livros/a-la-recherche-du-temps-perdu.jpg?raw=true"
                      alt="Capa"
                      style={{
                        height: 200,
                        width: 150,
                      }}
                    />
                  </Col>
                  <Col xs={7} className="name_user">
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="h6"><b>À la recherche du temps persu</b></Typography>
                    <Typography sx={{ fontFamily: 'Poppins', paddingTop: "1%" }} ><b>Type:</b>Trade </Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Price:</b> 29.99$</Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Condition:</b>Good Shape </Typography>
                  </Col>
                  <Col xs={1} className="Reply">
                  <Button variant="contained" endIcon={<EditIcon /> }style={{ marginTop: "30%" }} />
                  <Button variant="contained" endIcon={<DeleteIcon />} style={{ marginTop: "30%" }}/>
                  <Button variant="contained" endIcon={<SendIcon />} style={{ marginTop: "50%" }}>Orders</Button>
                  </Col>
                </Row>
              </Container>
              <Container className='Msg_containers' style={{ paddingTop: "2%", border: "Grey solid 1px" }}>
                <Row>
                  <Col xs={2} >
                    <img
                      src="https://github.com/diogsilva/ShelfShare/blob/main/public/img/livros/a-la-recherche-du-temps-perdu.jpg?raw=true"
                      alt="Capa"
                      style={{
                        height: 200,
                        width: 150,
                      }}
                    />
                  </Col>
                  <Col xs={7} className="name_user">
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="h6"><b>À la recherche du temps persu</b></Typography>
                    <Typography sx={{ fontFamily: 'Poppins', paddingTop: "1%" }} ><b>Type:</b>Trade </Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Price:</b> 29.99$</Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} ><b>Condition:</b>Good Shape </Typography>
                  </Col>
                  <Col xs={1} className="Reply">
                  <Button variant="contained" endIcon={<EditIcon /> }style={{ marginTop: "30%" }} />
                  <Button variant="contained" endIcon={<DeleteIcon />} style={{ marginTop: "30%" }}/>
                  <Button variant="contained" endIcon={<SendIcon />} style={{ marginTop: "50%" }}>Orders</Button>
                  </Col>
                </Row>
              </Container>
              <Container style={{ borderBottom: "white solid 1px" }}>
                <Button classname="mt-b" style={{ decoration: "none", backgroundColor: "bisque", color: "#494949", paddingLeft: "99%" }} >
                  <OpenInFullIcon />
                </Button>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyShelf;
