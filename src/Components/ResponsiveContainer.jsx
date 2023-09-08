import React from 'react';
import Box from '@mui/material/Box';

const ResponsiveContainer = ({ children }) => {
    return (
        <Box
        sx={{
            maxWidth: '90%',
            padding: '8px', // Espaciado interno
            margin: '0 auto', // Centrar horizontalmente
            boxSizing: 'border-box',
            background: 'rgba(0, 0, 0, 0.1)', // Fondo con 20%
            borderRadius: '10px',
        }}
        >
        {children}
        </Box>
    );
};

export default ResponsiveContainer;
