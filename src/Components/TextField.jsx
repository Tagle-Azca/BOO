import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ReusableTextField({
  id,
  label,
  borderRadius,
  backgroundColor,
  textColor,
}) {
  const textFieldStyle = {
    borderRadius: borderRadius || "100px",
    backgroundColor: backgroundColor || "rgba(255, 255, 255, 0.7)",
    color: textColor || "black",
    fontFamily: "inter",
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 3, fontFamily: "inter", width: "20rem" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} label={label} style={textFieldStyle} />
    </Box>
  );
}
