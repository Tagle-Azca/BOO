import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons() {
  return (
    <Stack
      direction="row"
      spacing={8}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="outlined"
        style={{ borderRadius: "20px", marginLeft: "1rem" }}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        style={{
          width: "7.3rem",
          marginLeft: "3rem",
          backgroundColor: "#F7E01D",
          color: "black",
          borderRadius: "20px",
        }}
      >
        Sign up
      </Button>
    </Stack>
  );
}
