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
    fontFamily,
    outlined
    }) {
    const textFieldStyle = {
        borderRadius: borderRadius || '10px',
        backgroundColor: backgroundColor || 'white',
        color: textColor || 'black',
        fontFamily: 'inter'
    };

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '30ch', fontFamily: 'inter'},
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
