import React from "react";
import TextField from '../Components/TextField'
import ResponsiveContainer from "../Components/ResponsiveContainer";

function App() {
    return (
        <div className="App">
        <header className="App-header">
        <div className="tiutulo" style={{display:'grid', height:'20rem',fontSize:'2rem', fontFamily:'inter' }}>
            <h1 className="Title" >
                    <p className="Title">
                        <strong>Sign UP!</strong>
                    </p>
            </h1>
        </div>
        <div className="container">
            <ResponsiveContainer>
                
                <TextField
                    id="myTextField"
                    label="Mail"   
                />
                <TextField
                    id="myTextField"
                    label="Password"
                />    
            </ResponsiveContainer>
            
        </div>
            
        </header>
        </div>
    );
}

export default App;
