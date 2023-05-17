
import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Notific.css';



// Home Screen
const Messages = (props) => {

  return (
    <div className='body'>
      <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
            <img
              src="https://i.pinimg.com/originals/30/d9/72/30d972c8814abe4a1a6c888386a402bf.jpg"
              alt="Tom"
              style={{
                borderRadius: 400 / 2,
                height: 90,
                width: 90,
              }}
            />
          </Col>
          <Col xs={7} className="name_user">
            <Typography sx={{ fontFamily: 'Poppins' }} variant="body1"><b>Alber79</b></Typography>
            <Typography sx={{ fontFamily: 'Poppins' }} variant="subtitle" >Irei enviar o livro ainda hoje por correio! </Typography>
          </Col>
          <Col xs={1} className="when_sended"> Now</Col>
        </Row>
      </Container>
      <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
            <img
              src="https://static.wikia.nocookie.net/shadowandbone/images/8/89/Inej_by_Kevin_Wada.png"
              alt="Tom"
              style={{
                borderRadius: 400 / 2,
                height: 90,
                width: 90,
              }}
            />
          </Col>
          <Col xs={7} className="name_user">
            <Typography sx={{ fontFamily: 'Poppins' }} variant="body1"><b>JP21</b></Typography>
            <Typography sx={{ fontFamily: 'Poppins' }} variant="subtitle" >viste o video que te mandei ontem? </Typography>
          </Col>
          <Col xs={1} className="when_sended"> Yesterday</Col>
        </Row>
      </Container>
      <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2022/03/google-hummingbird-623189e488ff2-sej-1280x720.jpg"
              alt="Tom"
              style={{
                borderRadius: 400 / 2,
                height: 90,
                width: 90,
              }}
            />
          </Col>
          <Col xs={7} className="name_user">
            <Typography sx={{ fontFamily: 'Poppins' }} variant="body1"><b>CarolTL</b></Typography>
            <Typography sx={{ fontFamily: 'Poppins' }} variant="subtitle" >https://www.wook.pt/livro/a-man-called-ove-fredrik-backma... </Typography>
          </Col>
          <Col xs={1} className="when_sended"> Yesterday</Col>
        </Row>
      </Container>
    </div>
  )
};

export default Messages;