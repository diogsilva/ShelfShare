import React from 'react';
import Box from '@mui/material/Box';

const MyStats = () =>{
    return (
        <Box color="white" 
             bgcolor="#E0E0E0"
             height={'250px'}
             p={1}
             display={'flex'}
             flexDirection={'column'}
             borderRadius={'15px'}
             marginLeft={'25px'}
             marginRight={'25px'}
             marginTop={'25px'}>

            <h1 style={{ 
            marginLeft: '25%', 
            marginTop: '60px', 
            color:'black',
            fontFamily:'Poppins',
            width: '30%' 
            }}>7</h1>
            <h1 style={{  
            marginTop: '5px', 
            marginLeft: '22%', 
            color:'black',
            fontFamily:'Poppins',
            width: '30%' 
            }}>Traded</h1>
            <h1 style={{ 
            marginLeft: '75%', 
            marginTop: '-105px',
            color:'black', 
            fontFamily:'Poppins',
            width: '30%' 
            }}>14</h1>
            <h1 style={{  
            marginTop: '0px', 
            marginLeft: '74%', 
            fontFamily:'Poppins',
            color:'black',
            width: '30%' 
            }}>Sold</h1>
    </Box>

      ); 
};

export default MyStats;