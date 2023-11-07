import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const checkboxStyle = {
  color: "black", // Establece el color blanco para el checkbox
  "&.Mui-checked": {
    color: "Black", // Establece el color blanco cuando está marcado
  },
};

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} style={checkboxStyle} />
    </div>
  );
}
