import React from "react";
import Maps from "../IMG/2map.png";
import Boton from '../Components/ReusableButton';
import '../CSS/Wallpaper.css';

function App() {
    const imgStyle = {
        width: "26rem",
        height: "auto",
        marginTop:'10rem',
        color:'white'
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="foto" style={{ background: "fixed"}}>
                    <img src={Maps} alt="Mi Imagen" style={imgStyle} />
                </div>
                <div style={{marginTop:'-33rem', marginLeft:'5rem', display:'grid', color:'white' }}>
                    <h1>Let's make you</h1>
                    <h1 style={{marginLeft:'2rem', marginTop:'-1rem'}}>The best programer</h1>
                </div>
                    <div style={{display:'flex', marginLeft:'5rem',marginTop:'23rem', gap: '5rem'}}>   
                            <Boton
                                text="Skip"
                                variant="contained"
                                backgroundColor='rgb(190,190,188,.4)'
                                textColor="Black"

                            />
                        
                            <Boton
                                text="Start"
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
