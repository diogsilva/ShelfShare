import LocationOnIcon from '@mui/icons-material/LocationOn';
import { InputAdornment } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import MyShelf from '../Components/MyShelf.jsx';
import MyStats from '../Components/MyStats.jsx';


const Profile = (props) => {

  const [selectedTab, setSelectedTab] = useState(0);


  const handleChange = (event, selectedTab) => {
    setSelectedTab(selectedTab);
  };

  return (
    <Stack spacing={2}>
      <div>
        <Avatar sx={{ marginLeft: '15px', marginTop: '14px', position: 'absolute', height: '125px', width: '125px' }} alt="Remy Sharp" src="https://i.pinimg.com/originals/78/ae/ae/78aeae1093015be662b0aa45a10a3174.jpg" />
        <Box color="white"
          bgcolor="#E0E0E0"
          height={'100px'}
          p={1}
          display={'flex'}
          flexDirection={'column'}>
        </Box>
        <Box color="white"
          bgcolor="#E0E0E0"
          height={'80px'}
          p={1}
          display={'flex'}
          flexDirection={'column'}>
          <h2 style={{
            fontFamily: 'Poppins',
            marginLeft: '10%',
            marginTop: '-25px',
            color: 'black',
            width: '30%'
          }}>AntonioMarques27</h2>

          <h7 style={{
            fontFamily: 'Poppins',
            marginLeft: '85%',
            marginRight: '5%',
            marginTop: '-4px',
            color: 'black',
            width: '30%'
          }}>Joined 24 Oct. 2014</h7>
          <InputAdornment style={{ marginLeft: '10%', marginTop: '-15px' }}>
            <LocationOnIcon /> Portugal
          </InputAdornment>
          <Rating style={{ marginLeft: '10px', marginTop: '9px' }} name="read-only" value={4} readOnly />

        </Box>

        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label="My Shelf" />
          <Tab label="My Stats" />
          <Tab label="My orders"/>
        </Tabs>
        {selectedTab === 0 && <MyShelf />}
        {selectedTab === 1 && <MyStats />}

      </div>
    </Stack>

  )
};

export default Profile;
