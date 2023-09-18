import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DateOfBirthSelect() {
    const [day, setDay] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };

    // Define las opciones para días, meses y años.
    const days = [...Array(31).keys()].map((day) => day + 1);
    const months = [...Array(12).keys()].map((month) => month + 1);
    const years = [...Array(100).keys()].map((year) => 2023 - year); // Asume que se permite seleccionar hasta 100 años atrás.

    return (
        <Box sx={{width:'21rem',justifyContent:'center',display:'flex', margin:'.4em', gap:'.5rem' }}>
            <FormControl fullWidth>
                <InputLabel id="day-select-label">Day</InputLabel>
                <Select
                    style={{backgroundColor:'rgba(255, 255, 255, 0.4)', borderRadius:'10px'}}
                    labelId="day"
                    id="day-select"
                    value={day}
                    label="Day"
                    onChange={handleChangeDay}
                >
                    {days.map((day) => (
                        <MenuItem key={day} value={day}>
                            {day}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                    style={{backgroundColor:'rgba(255, 255, 255, 0.4)', borderRadius:'10px'}}
                    labelId="month"
                    id="month-select"
                    value={month}
                    label="Month"
                    onChange={handleChangeMonth}
                >
                    {months.map((month) => (
                        <MenuItem key={month} value={month}>
                            {month}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="year-select-label">Year</InputLabel>
                <Select
                    style={{backgroundColor:'rgba(255, 255, 255, 0.4)', borderRadius:'10px'}}
                    labelId="year-select-label"
                    id="year-select"
                    value={year}
                    label="Year"
                    onChange={handleChangeYear}
                >
                    {years.map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
