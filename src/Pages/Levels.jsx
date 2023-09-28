import React, { useState } from "react";
import "../CSS/Wallpaper.css";
import Button from "../Components/Button";
import ResponsiveContainer from "../Components/ResponsiveContainer";

export default function Levels() {
  // Estado para rastrear la opción seleccionada para el nivel de programación
  const [selectedOption, setSelectedOption] = useState(null);

  // Estado para rastrear la opción seleccionada para "Back" y "Next"
  const [navigationOption, setNavigationOption] = useState(null);

  const handleLevelClick = (option) => {
    // Envía la opción del nivel de programación al backend o realiza acciones necesarias
    setSelectedOption(option);
  };

  const handleNavigationClick = (option) => {
    // Realiza acciones relacionadas con las opciones de navegación (por ejemplo, ir atrás o avanzar)
    setNavigationOption(option);
  };

  const buttonData = [
    { text: "None" },
    { text: "Basic" },
    { text: "Intermediate" },
    { text: "Master" },
  ];

  const ButtonData2 = [{ text: "Back" }, { text: "Next" }];

  return (
    <div className="Principal">
      <div className="Levels-principal">
        <div
          className="Titutlo"
          style={{
            display: "grid",
            justifyContent: "center",
            color: "#fff",
            marginTop: "2rem",
          }}
        >
          <h1 style={{ marginLeft: "3.2rem" }}>What is your </h1>
          <h1 style={{ marginTop: "-1rem" }}>Programming level?</h1>
        </div>
        <ResponsiveContainer>
          <div
            className="Botones"
            style={{
              display: "grid",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "1rem",
            }}
          >
            {buttonData.map((data, index) => (
              <div key={index}>
                <Button
                  text={data.text}
                  width="15rem"
                  backgroundColor={
                    selectedOption === data.text ? "#000" : "#fff"
                  }
                  fontFamily="iners Sans"
                  color={selectedOption === data.text ? "white" : "black"}
                  borderRadius="10px"
                  onClick={() => handleLevelClick(data.text)}
                />
              </div>
            ))}
          </div>
          <div
            className="Botones2"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              marginTop: "5rem",
            }}
          >
            {ButtonData2.map((data2, index2) => (
              <div key={index2}>
                <Button
                  text={data2.text}
                  width="9rem"
                  backgroundColor={
                    data2.text === "Next" ? "#006B6B" : "rgba(255,255,255,.4)"
                  }
                  fontFamily="iners Sans"
                  color={data2.text === "Next" ? "white" : "black"}
                  borderRadius="20px"
                  onClick={() => handleNavigationClick(data2.text)}
                />
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
