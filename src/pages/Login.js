import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Row } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div >

      <Grid className='main' container component="main" sx={{ height: '100vh' }} >
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid 
          item xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={6} 
          square 
          sx={{backgroundColor:'bisque'}}>
          <Typography align="center" component="h1" variant="h3" style={{ paddingTop: '20%' }}>
            <b>Login</b>
          </Typography>
          <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
              <Row>
                <label>
                  <p><b style={{ color: 'black' }}>Username:</b></p>
                  <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
              </Row>
              <Row>
                <label>
                  <p><b style={{ color: 'black', marginLeft: '5%' }}>Password:</b></p>
                  <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
              </Row>
              <div>
                <Button
                  style={{ backgroundColor: 'green' }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};