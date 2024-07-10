//import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'


function Login(){

    const [password, setPass]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
  
    const handleToggle = () => {    
      if(password==='password'){
        setIcon(eye);      
        setPass('text');
      }
      else{
        setIcon(eyeOff);     
        setPass('password');
      }
    }
  
    return(
        <section>
            <div>
                <h1 className="loginRegisterTitle" data-testid='login-1'>Login</h1>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                <link rel="stylesheet" href="App.css"></link>
                <form action="/login" method="POST">
                    <div className='loginRegisterCentered'>
                        <span>
                            <div>
                                <input id="username" name="username" placeholder="Username" type="text" required className="inp-text-input-loginReg" autocomplete="off"></input>
                            </div>
                            <p>
                            </p>
                            <div>
                                <input id="password" name="password" placeholder="Password" type={password} required className="inp-text-input-loginReg" autocomplete="off"></input>
                                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                            </div>
                            <p>
                            </p>
                            <input type="submit" value="Login" className="inp-text-input-loginReg"/>
                            <div class="register">
                                Don't have an account yet?
                                <Link to='/register'><button id="register-link" className="btn-work-reg">Register</button></Link>
                                Continue as Guest
                                <form action="/guest" method="POST"><input type="submit" value="Guest" className="inp-text-input-loginReg"/></form>
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;