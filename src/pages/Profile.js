import React from 'react';
import { Grid } from "@mui/material"
// Home Screen
const Profile = (props) => {

return (
    <Grid container className="section-body" spacing={5}>
        <Grid item sx={1} />
        <Grid item><p>Avatar</p></Grid>
        <Grid item><p>Username</p></Grid>
    </Grid>
)
};

export default Profile;