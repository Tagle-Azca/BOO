import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; // Importa IconButton

export default function CustomButton({
  text,
  width,
  backgroundColor,
  fontFamily,
  color,
  borderRadius,
  onClick,
  icon, // Nueva prop para la imagen
}) {
  const buttonStyle = {
    width: width || "7rem",
    height: "7rem", //
    backgroundColor: backgroundColor || "#fff",
    fontFamily: fontFamily || "inherit",
    color: color || "black",
    borderRadius: borderRadius || "40px",
    margin: "1rem",
  };

  if (icon) {
    // Si se proporciona una imagen, utiliza IconButton
    return (
      <IconButton
        variant="contained"
        style={buttonStyle}
        onClick={onClick}
        color="primary" // Puedes personalizar el color del icono aquí
      >
        {icon}
      </IconButton>
    );
  } else {
    // Si no se proporciona una imagen, utiliza Button normal
    return (
      <Button variant="contained" style={buttonStyle} onClick={onClick}>
        {text}
      </Button>
    );
  }
}
