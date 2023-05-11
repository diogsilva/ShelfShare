import React, { Component } from "react";
import {Form,FormControl,InputGroup,Container,Row,Col} from "react-bootstrap";
import { Button } from '@mui/material';
import './Messages.css';

import Messages from './Messages';


const Notification = (props) => {

    return (
      <div className='body'>
        <Container className="header" style={{textAlign:"center"}}>
          <Row>
            <Col><button className='button_l' href={Messages} ><b>Messagaes</b></button></Col>
            <Col><button className='button_' href="./"><b>Notifications</b></button></Col>
          </Row>
        </Container>
        <Container className='Msg_containers'>
          <Row>
            <Col xs={3} >
                <img
                  src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg"
                  alt="Tom"
                  style={{
                    borderRadius: 400/2,
                    height: 90,
                    width: 90,
                  }}
                /> 
            </Col>
            <Col xs={7} className="name_user"> 
              <p><b>Tom Cruise </b></p>
              <p className="mens">Irei enviar o livro ainda hoje por correio! </p>
            </Col>
            <Col xs={1} className="when_sended"> Now</Col>
          </Row>
        </Container>
        <Container className='Msg_containers'>
          <Row>
            <Col xs={3} >
              <img
                src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg"
                alt="Tom"
                style={{
                  borderRadius: 400/2,
                  height: 90,
                  width: 90,
                }}
              /> 
            </Col>
            <Col xs={7} className="name_user"> 
              <p><b>Tom Cruise </b></p>
              <p className="mens">Irei enviar o livro ainda hoje por correio! </p>
            </Col>
            <Col xs={1} className="when_sended"> Yesterday</Col>
          </Row>
        </Container> 
        <Container className='Msg_containers'>
          <Row>
            <Col xs={3} >
              <img
                src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg"
                alt="Tom"
                style={{
                  borderRadius: 400/2,
                  height: 90,
                  width: 90,
                }}
              /> 
            </Col>
            <Col xs={7} className="name_user"> 
              <p><b>Tom Cruise </b></p>
              <p className="mens">Irei enviar o livro ainda hoje por correio! </p>
            </Col>
            <Col xs={1} className="when_sended"> Yesterday</Col>
          </Row>
        </Container>        
        
      </div>
    )
  };
  
  export default Notification;