import React from 'react';
import Box from '@mui/material/Box';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Jan', 'Ferb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Sold',
    data: [3, 1, 50, 9, 7],
    backgroungColor: 'red',
    borderColor: 'red',
    pointBorderColor: 'red',
    fill: true,
    tension: 0.4,
    backgroundColor: 'red',
    yAxisID: 'y',
  },{
    label: 'Trade',
    data: [40, 8, 10, 4, 20],
    backgroungColor: 'blue',
    borderColor: 'blue',
    pointBorderColor: 'blue',
    fill: true,
    tension: 0.4,
    backgroundColor: 'blue',
    yAxisID: 'y1',
  }]
}

export const options = {
  responsive : true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'My stats'
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left'
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

const MyStats = () => {
  return (
    <div>
      <Box color="white"
        bgcolor="#fabe70"
        height={'250px'}
        p={1}
        display={'flex'}
        flexDirection={'column'}
        borderRadius={'15px'}
        marginLeft={'25px'}
        marginRight={'25px'}
        marginTop={'25px'}
        border={"black solid 5px"}>

        <h1 style={{
          marginLeft: '25%',
          marginTop: '60px',
          color: 'black',
          fontFamily: 'Poppins',
          width: '30%'
        }}>7</h1>
        <h1 style={{
          marginTop: '5px',
          marginLeft: '22%',
          color: 'black',
          fontFamily: 'Poppins',
          width: '30%'
        }}>Traded</h1>
        <h1 style={{
          marginLeft: '75%',
          marginTop: '-105px',
          color: 'black',
          fontFamily: 'Poppins',
          width: '30%'
        }}>14</h1>
        <h1 style={{
          marginTop: '0px',
          marginLeft: '74%',
          fontFamily: 'Poppins',
          color: 'black',
          width: '30%'
        }}>Sold</h1>
      </Box>
      <Box style={{ width: "80%", height: "60%", padingTop: "20%",paddingLeft:"20%",marginTop:"5%" , paddingBottom:"5%",color:"white"}}>
        <Line
          data={data}
          options={options}

        ></Line>
      </Box>
    </div>

  );
};

export default MyStats;