import React from "react";
import TextField from '../Components/TextField'
import '../CSS/Wallpaper.css'
import Checkbox from '../Components/Checkbox'
import Button from '../Components/Button';
import Apple from '../Components/Apple';


function Login() {
    const handleButtonClick = () => {
        console.log('boton click')
    };

    return (
        <div className="Login">
            <header className="Login-header">
                <div className="Foto" style={{ background: 'fixed' }}>
                    <div className="W" style={{ fontFamily: 'inter', display: 'flex', justifyContent: 'center', marginTop: '2rem', fontSize: '1.5rem', color:'white' }}>
                        <strong>
                            <h1>Wellcome!</h1>
                        </strong>
                    </div>
                    <div className="signUp" style={{display:'grid', justifyContent:'center'}}>
                    <TextField
                        id="myTextField"
                        label="Example@example.com"
                    />
                    <TextField
                        id="myTextField"
                        label="Password"
                    />
                    </div>
                    <div className="Box_letras" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', marginTop: '-2rem', marginLeft:'-1rem' }}>
                        <div style={{ marginRight: '5rem' }}>
                            <Checkbox />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft:'-5rem' }}>
                            <h5>Remember me</h5>
                            <h5 style={{ marginLeft: '4rem' }}>Forgot Password?</h5>
                        </div>
                    </div>
                    <div className="button" style={{ display: 'grid', justifyContent: 'center', color:'#fff'}}>
                        <Button onClick={handleButtonClick}/>
                    </div>
                    <div className="or" style={{display:'grid', justifyContent:'center'}}>
                        <h6>---------------------------or---------------------------</h6>
                    </div>
                    <div className="apple" style={{marginTop:'1rem'}}>
                        <Apple/>
                    </div>
                    <div className="register" style={{display:'grid', justifyContent:'center', color:'#0008'}}>
                        <h6>New here? Register!</h6>
                    </div>

                </div>
                
            </header>
        </div>
    )
}

export default Login;
