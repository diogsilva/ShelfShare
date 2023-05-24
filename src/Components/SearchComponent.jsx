import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import '../pages/Search';
import SearchIcon from '@mui/icons-material/Search';
/*import CloseIcon from '@mui/icons-material/Close';
import Home from "../pages/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';*/

const SearchComponent = ({ onChange, value }) => (
    <TextField
        fullWidth
        onChange={onChange}
        value={value}
        size="small"
        variant="outlined"
        InputProps={{
            startAdornment: (
                <InputAdornment position="start" >
                    <SearchIcon />
                </InputAdornment>
            )/*,
            endAdornment: (
                <InputAdornment position="end" > 
                    < CloseIcon /> 
                </InputAdornment>
            )*/
        }}

    />
)

export default SearchComponent;