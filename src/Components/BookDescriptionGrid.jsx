import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function BookDescription({ source, title, author, country, year }) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={source} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography sx={{fontFamily: 'Poppins'}} gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{fontFamily: 'Poppins'}} variant="body1" gutterBottom>
                            {country}
                        </Typography>
                        <Typography sx={{fontFamily: 'Poppins'}} variant="body1" color="text.secondary">
                            {author}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography sx={{fontFamily: 'Poppins'}} variant="body2" component="div">
                        {year}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}