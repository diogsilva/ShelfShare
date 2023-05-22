import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Link from '@mui/material/Link';
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
          sx={{ backgroundColor: '#FFE7C7' }}>
          <p align="center" style={{ paddingTop: '10%' }}>Welcome to</p>
          {/*<Typography component="h2" variant="h2" style={{ paddingTop: '2%' }}>
            <b style={{ paddingLeft: "25%", color: "#DBA55E" }}>Shelf</b>
            <p><b style={{ paddingLeft: "45%", color: " #DBA55E" }}>Share</b></p>
        </Typography>*/}
          
          <img 
              align="center"
              src="https://github.com/diogsilva/ShelfShare/blob/main/public/img/foto.png?raw=true"
              alt="Logo"
              style={{
                paddingTop:'0%',
                maxWidth:'560px',
                maxHeight:'250px',
                width: 'auto',
                height: 'auto',
                paddingLeft:'10%',
                
              }}/>
            <p align="center" style={{ fontStyle: "italic", fontSize: "15", color: "#494949", paddingTop:'3%'}}>The app that got <b>your Shelf Covered!!</b></p>


          <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
              <Row>
                <label>
                  <p style={{ color: "#494949", fontSize: "5" }}>Username:</p>
                  <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
              </Row>
              <Row>
                <label>
                  <p style={{ color: "#494949", fontSize: "5" }}>Password:</p>
                  <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
              </Row>
              <div>
                <Button
                  style={{ backgroundColor: '#DBA55E' }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" align='left'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link href="#" variant="body2" align='right'>
                      {"Don't have an account?"}
                    </Link>
                  </Grid>
                </Grid>
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