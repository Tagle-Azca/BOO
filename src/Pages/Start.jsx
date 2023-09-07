import React from "react";
import Boton from '../Components/ReusableButton';
import '../CSS/Wallpaper.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Title" style={{color:'white',fontFamily:'Inter', fontSize:'1rem', marginTop:'17rem', marginLeft:'4rem', }}>
                    <strong>
                    <h1 style={{marginLeft:'2rem'}}>Welcome To</h1>
                    <h1>Breaking the code</h1>
                    </strong>
                </div>
                <div className="button" style={{width:'10rem', marginLeft:'7rem', marginTop:'10rem'}}>
                    <Boton
                    text="Start"
                    variant="contained"
                    backgroundColor="white"
                    textColor='Black'
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
