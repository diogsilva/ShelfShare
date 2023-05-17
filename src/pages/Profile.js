import React from 'react';
import { Grid, Avatar } from "@mui/material"

// Temporariamente só um user
const antónio = require("../sample/users.json")[0];
const profilePath = "/users/" + antónio.username + "/profile/"
const avatarPath = profilePath + "avatar.jpg";
const bannerPath = profilePath + "banner.jpg";

console.log(antónio)
console.log(avatarPath)

const Profile = (props) => {

return (
    <Grid container className="section-body" spacing={5} style={{backgroundImage: "url('" + bannerPath + "')"}}>
        <Grid item xs={1} />
        <Grid item><Avatar src={avatarPath} /></Grid>
        <Grid item><p>{antónio.username}</p></Grid>
    </Grid>
)
};

export default Profile;