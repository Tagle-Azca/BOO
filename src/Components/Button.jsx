import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ text, width, backgroundColor, fontFamily, color, borderRadius, onClick }) {
    const buttonStyle = {
        width: width || '20rem',
        height: '3rem', // Agregamos una altura fija
        backgroundColor: backgroundColor || '#fff',
        fontFamily: fontFamily || 'inherit',
        color: color || 'black',
        borderRadius: borderRadius || '4px',
    };

    return (
        <Button variant="contained" style={buttonStyle} onClick={onClick}>
            {text}
        </Button>
    );
}
