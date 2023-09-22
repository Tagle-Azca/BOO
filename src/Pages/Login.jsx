import React from "react";
import TextField from "../Components/TextField";
import "../CSS/Wallpaper.css";
import Checkbox from "../Components/Checkbox";
import Button from "../Components/Button";
import DifLogin from "../Components/DIfLogin";

function Login() {
  const handleButtonClick = () => {
    console.log("boton click");
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <div className="Foto" style={{ background: "fixed" }}>
          <div
            className="Wellcome"
            style={{
              fontFamily: "inter",
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            <strong>
              <h1>Wellcome!</h1>
            </strong>
          </div>
          <div
            className="signUp"
            style={{ display: "grid", justifyContent: "center" }}
          >
            <TextField id="myTextField" label="Example@example.com" />
            <TextField id="myTextField" label="Password" />
          </div>
          <div
            className="Box_letras"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginTop: "-2rem",
              marginLeft: "-1rem",
            }}
          >
            <div style={{ marginRight: "5rem" }}>
              <Checkbox />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-5rem",
              }}
            >
              <h5>Remember me</h5>
              <h5 style={{ marginLeft: "4rem" }}>Forgot Password?</h5>
            </div>
          </div>
          <div
            className="button"
            style={{ display: "flex", justifyContent: "center", color: "#fff" }}
          >
            <Button
              style={{ width: "20rem" }}
              text="Sign In"
              backgroundColor="#fff"
              fontFamily="Inter"
              color="black"
              borderRadius="20px"
              onClick={handleButtonClick}
            />
          </div>
          <div
            className="or"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              marginTop: "1rem",
              width: "100%", // Ajusta el ancho total del elemento
              margin: "0 auto", // Centra el elemento horizontalmente
            }}
          >
            <div
              style={{
                flex: "20", // Comienza en el 20% de la página (izquierda)
                height: "1px",
                background:
                  "linear-gradient(to right, transparent 20%, #fff 50%, #fff 100%, transparent 80%)", // Gradiente igual en ambos lados
              }}
            ></div>
            <h6 style={{ margin: "0 1rem" }}>or</h6>
            <div
              style={{
                flex: "20", // Termina en el 80% de la página (derecha)
                height: "1px",
                background:
                  "linear-gradient(to left, transparent 20%, #fff 50%, #fff 100%, transparent 80%)", // Gradiente igual en ambos lados
              }}
            ></div>
          </div>

          <div className="apple" style={{ marginTop: "1rem" }}>
            <DifLogin />
          </div>
          <div
            className="register"
            style={{
              display: "grid",
              justifyContent: "center",
              color: "#0008",
            }}
          >
            <h6>New here? Register!</h6>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
