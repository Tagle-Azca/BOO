import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ReusableTextField({
    id,
    label,
    variant,
    borderRadius,
    backgroundColor,
    textColor,
    }) {
    const textFieldStyle = {
        borderRadius: borderRadius || '10px',
        backgroundColor: backgroundColor ||  'rgba(255, 255, 255, 0.4)',
        color: textColor || 'black',
        fontFamily: 'inter'
    };

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, fontFamily: 'inter', width:'20rem'},
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
            id={id}
            label={label}
            variant={variant || 'outlined'}
            style={textFieldStyle}
        />
        </Box>
    );
}
