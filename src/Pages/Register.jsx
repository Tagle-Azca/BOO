import React from "react";
import TextField from "../Components/TextField";
import ResponsiveContainer from "../Components/ResponsiveContainer";
import "../CSS/Wallpaper.css";
import Checkbox from "../Components/Checkbox";
import Button from "../Components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="Back"
          style={{ marginTop: "1rem", marginLeft: ".5rem" }}
        >
          <IconButton
            color="primary"
            onClick={() => {
              /* Agrega tu lógica de manejo de clic aquí */
            }}
          >
            <ArrowBackIcon style={{ fontSize: "3rem", color: "white" }} />
          </IconButton>
        </div>
        <div
          className="container"
          style={{ marginLeft: "1rem", marginTop: ".2rem" }}
        >
          <ResponsiveContainer>
            <div
              className="tiutulo"
              style={{
                display: "grid",
                justifyContent: "center",
                height: "20rem",
                fontSize: "1.5rem",
                fontFamily: "inter",
                color: "white",
                marginTop: "-2rem",
              }}
            >
              <h1 className="Title">
                <p
                  className="Title"
                  style={{ display: "grid", justifyContent: "center" }}
                >
                  <strong>Hello</strong>
                </p>
                <p style={{ marginTop: "-2rem" }}>
                  <strong>Sign UP!</strong>
                </p>
              </h1>
            </div>

            <div
              className="signUp"
              style={{
                display: "grid",
                justifyContent: "center",
                marginBottom: "1rem",
                marginTop: "-6rem",
              }}
            >
              <TextField id="myTextField" label="Mail" />
              <TextField id="myTextField" label="Password" />
            </div>
            <div>
              <div
                className="signUp"
                style={{
                  display: "grid",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  marginTop: "",
                }}
              >
                <Button
                  text="Next"
                  width="20rem"
                  backgroundColor="#004B6B"
                  fontFamily="Arial"
                  color="white"
                  borderRadius="20px"
                  onClick={() => {
                    // Aqui va logica de manejo
                  }}
                />
              </div>
            </div>
            <div
              className="Check"
              style={{
                display: "flex",
                color: "white",
                marginTop: "1rem",
                justifyContent: "center",
                marginLeft: "-5rem",
              }}
            >
              <Checkbox />
              <p>I accept the policy and terms</p>
            </div>
          </ResponsiveContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
