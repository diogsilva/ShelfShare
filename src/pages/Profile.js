import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MyStats from '../Components/MyStats.jsx';
import MyShelf from '../Components/MyShelf.jsx';


const Profile = (props) => {

    const [selectedTab,setSelectedTab] = useState();


    const handleChange = (event, selectedTab) => {
      setSelectedTab(selectedTab);
    };

  return (
    <Stack spacing={2}>
      <div>
        <Avatar sx={{ marginTop: '8px', position: 'absolute', height: '125px', width: '125px' }} alt="Remy Sharp" src="https://i.pinimg.com/originals/78/ae/ae/78aeae1093015be662b0aa45a10a3174.jpg" />
        <Box
          sx={{
            width: "auto",
            height: 100,
            backgroundColor: '#E0E0E0',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: "auto",
            height: 60,
            backgroundColor: '#E0E0E0',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />

        <Tabs  value={selectedTab} onChange={handleChange} centered>
        <Tab label="My Shelf" />
        <Tab label="My Stats" />
        <Tab label="My orders" disabled/>
      </Tabs>
      {selectedTab === 0 && <MyShelf />}
      {selectedTab === 1 && <MyStats />}

      </div>
    </Stack>

  )
};

export default Profile;



/*
// Temporariamente só um user
const antónio = require("../sample/users.json")[0];
const profilePath = "/profiles/" + antónio.userName

console.log(antónio)

const Profile = (props) => {

return (
    <div>
    <UserBanner user={antónio} style={{height: 200, width: 200}}/>
    <Grid container className="section-body" spacing={5}>
        <Grid item xs={1} />
        <Grid item><UserAvatar user={antónio} /></Grid>
        <Grid item><p>{antónio.username}</p></Grid>
    </Grid>

    <Grid container className="section-body" columns={3}>
        <Grid item xs={1}><p className="profile-trade-counter">{antónio.booksSold}</p></Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={1}><p className="profile-trade-counter">{antónio.booksTraded}</p></Grid>
        <Divider orientation="vertical" flexItem></Divider>
    </Grid>

    <Rating value={antónio.avgRating} precision={1/2} size="large" readOnly />
    </div>
)
};

export default Profile; 
*/