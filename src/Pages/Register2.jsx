import React from "react";
import TextField from "../Components/TextField";
import ResponsiveContainer from "../Components/ResponsiveContainer";
import "../CSS/Wallpaper.css";
import Selecter from "../Components/Slecter";
import Group from "../Components/ButtonGroup";

function App() {
  const handleButtonClick = () => {
    console.log("boton click");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="container"
          style={{ marginLeft: "1rem", marginTop: "4rem" }}
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
                marginTop: "3rem",
              }}
            >
              <h1 className="Title">
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
                marginTop: "-13rem",
              }}
            >
              <TextField id="myTextField" label="Name" />
              <TextField id="myTextField" label="Last Name" />
              <p style={{ marginLeft: "2rem", color: "white" }}>Day of birth</p>
            </div>
            <div
              className="Select"
              style={{
                display: "flex",
                justifyContent: "Center",
                marginTop: "-2rem",
              }}
            >
              <Selecter />
            </div>
            <div
              className="button"
              style={{
                marginTop: "2rem",
                display: "grid",
                justifyContent: "center",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              <Group />
            </div>
          </ResponsiveContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
