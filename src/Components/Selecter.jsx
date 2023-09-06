import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NumberSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // Crear un array de números del 1 al 31
    const numbers = Array.from({ length: 31 }, (_, index) => index + 1);

    return (
        <Box sx={{ minWidth: 120}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            {numbers.map((number) => (
                <MenuItem key={number} value={number}>
                {number}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </Box>
    );
}
