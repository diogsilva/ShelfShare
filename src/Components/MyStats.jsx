import React from 'react';
import Box from '@mui/material/Box';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  LineElement,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  LineElement,
  Legend
);
const data = {
  labels: ['Jan', 'Ferb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Sales of the',
    data: [3, 1, 8, 9, 7],
    backgroungColor: 'blue',
    borderColor: 'black',
    pointBorderColor: 'blue',
    fill: true,
    tension: 0.4
  }]
}
const options = {
  plugins: {
    legend: true
  },
  scales: {
    y: {
      min: 0,
      max: 70
    }
  }

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
      <Box style={{ width: "80%", height: "60%", padingTop: "20%",paddingLeft:"20%",marginTop:"5%" }}>
        <Line
          data={data}
          options={options}

        ></Line>
      </Box>


      {/*  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};*/}



    </div>

  );
};

export default MyStats;