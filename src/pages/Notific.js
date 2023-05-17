import React ,{useState}from "react";
import Messages from "./Messages";
import Notification from "./Notification";
import "./Notific.css";
import {Container,Row,Col} from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from '@mui/material';
// Home Screen
const Notific = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isActivee, setIsActivee] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(true);
    setIsActivee(false);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const handleClickk = () => {
    // 👇️ toggle
    setIsActive(false);
    setIsActivee(true);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <div className='body'>
      <BrowserRouter>
        <Container className="header" style={{textAlign:"center"}}>
          <Row>
            <Col><Link to='/messages'style={{textDecoration:'none'}}>
              <Button  style={{borderBottom: isActive ? "1px solid black" : "none"}} onClick={handleClick}><b className='button_l' >Messages </b></Button>
            </Link></Col>
            <Col><Link to='/notification' style={{textDecoration:'none'}}>
              <Button style={{borderBottom: isActivee ? "1px solid black" : "none"}} onClick={handleClickk}><b className='button_l'>Notifications</b></Button>
            </Link></Col>
          </Row>
        </Container>
        <Switch> 
          <Route path="/messages" component={Messages} />
          <Route path="/notification" component={Notification} />
          
        </Switch> 
      </BrowserRouter>
    </div>
  )
};

export default  Notific;