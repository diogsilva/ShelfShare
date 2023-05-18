import React from 'react';
import { Grid, Divider, Rating } from "@mui/material";
import UserAvatar from '../Components/UserAvatar.js';
import UserBanner from '../Components/UserBanner.js';

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