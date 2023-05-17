import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import Slider from '@mui/material/Slider';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import './Sell.css';

export default function Sell() {
  const [state, setState] = useState(false);
  const [lang, setLang] = React.useState('EN');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleOpen = () => {
    setIsModalVisible(true);
    setTimer(
      setTimeout(() => {
        setIsModalVisible(false);
      }, 2000)
    );
  };

  const handleClose = (reason) => {
    if (reason === "escapeKeyDown" || reason === "backdropClick") {
      setIsModalVisible(false);
      timer && clearTimeout(timer);
    }
  };
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const toggle = () => {
    setState(!state);
  }
  return (
    <div className='list-wrapper'>

      <Dialog open={isModalVisible} onClose={handleClose}>
        <Alert severity="success">You have listed a book!</Alert>
      </Dialog>
      <Stack spacing={3}>
        <h1 className='list-item'>List a Book</h1>
        <label>
          <p>Title</p>
          <input className='title-input' type="text" />
        </label>
        <label>
          <p>Type</p>
          <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--sell' : '')}>
            {state ? 'Sell' : 'Trade'}
          </button>
        </label>
        <label>
          <p>Condition</p>

          <Slider
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            marks={marks}
          />
        </label>
        <label>
          <p>Price</p>
          <input className='price-input' type="text" placeholder='€' />
        </label>
        <label>
          <p>Language</p>
          <Select
            labelId="demo-simple-select-label"
            fullWidth
            value={lang}
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value={'PT'}>Portuguese</MenuItem>
            <MenuItem value={'FR'}>French</MenuItem>
            <MenuItem value={'ES'}>Spanish</MenuItem>
            <MenuItem value={'EN'}>English</MenuItem>
          </Select>
        </label>

        <Button variant="outlined" endIcon={<CloudUploadIcon />}>
          Upload Photos
        </Button>
        <Button onClick={handleOpen} className='button-list-item' variant="contained" color="success">
          List Item
        </Button>
      </Stack>
    </div>
  )
};

const marks = [
  {
    value: 0,
    label: 'Bad',
  },
  {
    value: 50,
    label: 'Normal',
  },
  {
    value: 100,
    label: 'Good',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}