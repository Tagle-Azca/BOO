import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ text, width, backgroundColor, fontFamily, color, borderRadius, onClick }) {
    const buttonStyle = {
        
        backgroundColor: backgroundColor || '#fff', // Color de fondo personalizable, predeterminado a '#fff'
        fontFamily: fontFamily || 'inherit', // Fuente personalizable, predeterminada a 'inherit'
        color: color || 'black', // Color de texto personalizable, predeterminado a 'black'
        borderRadius: borderRadius || '4px', // Radio de borde personalizable, predeterminado a '4px'
    };

    return (
        <Button variant="contained" style={buttonStyle} onClick={onClick}>
            {text}
        </Button>
    );
}
