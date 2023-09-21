import React from "react";
import Button from "../Components/ButtonOptions";
import "../CSS/Wallpaper.css";
import Python from "../IMG/Python.png";
import JS from "../IMG/Javascript-logo.png";
import Cmas from "../IMG/C++.png";
import Mysql from "../IMG/Mysql.png";
import Java from "../IMG/Java.png";
import Github from "../IMG/github-mark.png";

function Options() {
  const imageSize = "50px"; // Personaliza el tamaño de la imagen

  const buttonStyle = {
    width: imageSize,
    height: imageSize,
    overflow: "hidden", // Para recortar cualquier contenido que se desborde
  };
  return (
    <div className="Options">
      <div className="Options-header">
        <div className="Title">
          <div
            style={{
              marginTop: "2rem",
              justifyContent: "center",
              display: "grid",
              color: "white",
            }}
          >
            <h1>Choose a lenguaje</h1>
            <h1 style={{ marginLeft: "2rem", marginTop: "-1rem" }}>
              to start with
            </h1>
          </div>
          <div
            className="Selects"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Button
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle} // Aplica el estilo al botón
                  icon={
                    <img
                      src={Python}
                      alt="Python"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></Button>
                <Button
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle} // Aplica el estilo al botón
                  icon={
                    <img
                      src={JS}
                      alt="JavaScript"
                      style={{ width: "80%", height: "auto" }}
                    />
                  }
                ></Button>
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle} // Aplica el estilo al botón
                  icon={
                    <img
                      src={Cmas}
                      alt="C++"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></Button>
                <Button
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle} // Aplica el estilo al botón
                  icon={
                    <img
                      src={Mysql}
                      alt="Mysql"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></Button>
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle} // Aplica el estilo al botón
                  icon={
                    <img
                      src={Java}
                      alt="Java"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></Button>
                <Button
                  text="Texto del Botón"
                  backgroundColor="white"
                  style={buttonStyle} // Aplica el estilo al botón
                  icon={
                    <img
                      src={Github}
                      alt="Github"
                      style={{ width: "100%", height: "auto" }}
                    />
                  }
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Options;
