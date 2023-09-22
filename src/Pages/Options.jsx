import React from "react";
import ButtonOptions from "../Components/ButtonOptions";
import "../CSS/Wallpaper.css";
import Python from "../IMG/Python.png";
import JS from "../IMG/Javascript-logo.png";
import Cmas from "../IMG/C++.png";
import Mysql from "../IMG/Mysql.png";
import Java from "../IMG/Java.png";
import Github from "../IMG/github-mark.png";
import ButtonOP from "../Components/ButtonOp";

function Options() {
  const imageSize = "50px";
  const buttonStyle = {
    width: imageSize,
    height: imageSize,
    overflow: "hidden",
  };
  return (
    <div className="Options">
      <div className="Options-header">
        <div className="Title">
          <div
            style={{
              marginTop: ".7rem",
              justifyContent: "center",
              display: "grid",
              color: "white",
            }}
          >
            <h1>Choose a lenguaje</h1>
            <h1
              style={{
                marginTop: "-.9rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              to start with
            </h1>
          </div>
          <div
            className="Selects"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <ButtonOptions
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle}
                  icon={
                    <img
                      src={Python}
                      alt="Python"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></ButtonOptions>
                <ButtonOptions
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle}
                  icon={
                    <img
                      src={JS}
                      alt="JavaScript"
                      style={{ width: "80%", height: "auto" }}
                    />
                  }
                ></ButtonOptions>
              </div>
              <div style={{ display: "flex" }}>
                <ButtonOptions
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle}
                  icon={
                    <img
                      src={Cmas}
                      alt="C++"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></ButtonOptions>
                <ButtonOptions
                  ButtonOptions="Texto del Botón"
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle}
                  icon={
                    <img
                      src={Mysql}
                      alt="Mysql"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></ButtonOptions>
              </div>
              <div style={{ display: "flex" }}>
                <ButtonOptions
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle}
                  icon={
                    <img
                      src={Java}
                      alt="Java"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></ButtonOptions>
                <ButtonOptions
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle}
                  icon={
                    <img
                      src={Github}
                      alt="Github"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></ButtonOptions>
              </div>
              <div className="Group" style={{ marginTop: "2rem" }}>
                <ButtonOP />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Options;
