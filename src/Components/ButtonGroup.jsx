import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={10}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        Back
      </Button>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        style={{ width: "7.3rem", backgroundColor: "#5b8e9d" }}
      >
        Sign up
      </Button>
    </Stack>
  );
}
