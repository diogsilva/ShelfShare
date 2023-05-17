import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { Button } from '@mui/material';
import {Link } from "react-router-dom";
import { Typography } from "@mui/material";
import './Notific.css';



// Home Screen
const Notification = (props) => {

  return (

    <div className='body'>
            <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2022/03/google-hummingbird-623189e488ff2-sej-1280x720.jpg"
              alt="Tom"
              style={{
                borderRadius: 400/2,
                height: 90,
                width: 90,
              }}
            /> 
          </Col>
          <Col xs={7} className="name_user"> 
            <Typography sx={{fontFamily: 'Poppins'}} variant="body1"><b>CarolTL</b></Typography>
            <Typography sx={{fontFamily: 'Poppins'}} variant="subtitle" >CarolTL has made an offer for on of your books!</Typography>
          </Col>
          <Col xs={1} className="when_sended"> Now</Col>
        </Row>
      </Container> 
      <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
              <img
                src="https://img1.ak.crunchyroll.com/i/spire4/6ff844fe5706a6716641a38ca478eb771671843837_main.jpg"
                alt="Tom"
                style={{
                  borderRadius: 400/2,
                  height: 90,
                  width: 90,
                }}
              /> 
          </Col>
          <Col xs={7} className="name_user"> 
          <Typography sx={{fontFamily: 'Poppins'}} variant="body1"><b>Sailor_Moon</b></Typography>
            <Typography sx={{fontFamily: 'Poppins'}} variant="subtitle" >Sailor_Moon sent their book to you!</Typography>
          </Col>
          <Col xs={1} className="when_sended"> Yesterday</Col>
        </Row>
      </Container>
      <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
            <img
              src="https://static.wikia.nocookie.net/vagabond/images/4/4d/Vagabond_Musashi.jpg/"
              alt="Tom"
              style={{
                borderRadius: 400/2,
                height: 90,
                width: 90,
              }}
            /> 
          </Col>
          <Col xs={7} className="name_user"> 
          <Typography sx={{fontFamily: 'Poppins'}} variant="body1"><b>Envy</b></Typography>
            <Typography sx={{fontFamily: 'Poppins'}} variant="subtitle" >Envy has made an offer for on of your books! </Typography>
          </Col>
          <Col xs={1} className="when_sended"> 2d ago</Col>
        </Row>
      </Container>
      <Container className='Msg_containers'>
        <Row>
          <Col xs={3} >
            <img
              src="https://static.wikia.nocookie.net/vagabond/images/f/f0/Sasaki_Kojirou.jpg"
              alt="Tom"
              style={{
                borderRadius: 400/2,
                height: 90,
                width: 90,
              }}
            /> 
          </Col>
          <Col xs={7} className="name_user"> 
          <Typography sx={{fontFamily: 'Poppins'}} variant="body1"><b>Dani81</b></Typography>
            <Typography sx={{fontFamily: 'Poppins'}} variant="subtitle" >The book you traded with Dani81 has arrived at your designated post office </Typography>
          </Col>
          <Col xs={1} className="when_sended"> 1w ago</Col>
        </Row>
      </Container>

      

    </div>
  )
};

export default Notification;