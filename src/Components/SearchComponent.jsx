import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = ({onChange, value}) =>  (
        <TextField
            fullWidth
            onChange={onChange}
            value={value}
            size="small"
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )

            }}
        />
    )

export default SearchComponent;