import React from 'react';
import { Grid, Avatar, Divider, Rating } from "@mui/material"

// Temporariamente só um user
const antónio = require("../sample/users.json")[0];
const profilePath = "/profiles/" + antónio.username
const avatarPath = profilePath + "/avatar.jpg";
const bannerPath = profilePath + "/banner.jpg";

console.log(antónio)
console.log(avatarPath)

const Profile = (props) => {

return (
    <div>
    <Grid container className="section-body" spacing={5} style={{backgroundImage: "url('" + bannerPath + "')"}}>
        <Grid item xs={1} />
        <Grid item><Avatar src={avatarPath} /></Grid>
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