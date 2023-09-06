import React from "react";
import Maps from "../IMG/1map.png";
import Boton from '../Components/ReusableButton';

function App() {
    const imgStyle = {
        width: "100vw",
        height: "auto",
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="foto" style={{ background: "fixed"}}>
                    <img src={Maps} alt="Mi Imagen" style={imgStyle} />
                </div>
                <div style={{marginTop:'-20rem'}}>
                    <h1>The Best Place</h1>
                    <h1>to learn coding</h1>
                </div>
                    <div style={{display:'flex', margin:'10rem', gap: '5rem'}}>   
                        
                            <Boton
                                text="Skip"
                                variant="contained"
                                backgroundColor='rgb(190,190,188,.4)'
                                textColor="Black"

                            />
                        
                            <Boton
                                text="Next"
                                variant="contained"
                                backgroundColor='white'
                                textColor="Black"

                            />
                        
                    </div>
            </header>
        </div>
    );
}

export default App;
