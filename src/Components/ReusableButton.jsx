import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ReusableButton({ text, variant, backgroundColor, textColor }) {
  const buttonStyle = {
    borderRadius: '10px', 
    padding: '8px 25px', 
    fontFamily: "inter",
    backgroundColor: backgroundColor, // Cambia el color de fondo del botón
    color: textColor, // Cambia el color del texto del botón
  };

  return (
    <Stack>
      <Button variant={variant} style={buttonStyle}>
        {text}
      </Button>
    </Stack>
  );
}
