import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';

function Login() {

  const google = () =>{
    window.open("http://localhost:5000/auth/google", "_self")
  }
  const facebook = () =>{
    window.open("http://localhost:5000/auth/facebook", "_self")
  }
  return (
    <div className="login">
        <h2 className="login-title">Log In using Google</h2>
        <div className="login-img" onClick={google}>
          <IconButton color="error" className="social-icon" aria-label="add an alarm">
            <GoogleIcon className="icon"/>
          </IconButton>
        </div>
        <div className="login-img" onClick={facebook}>
          <IconButton color="primary" className="social-icon" aria-label="add to shopping cart">
            <FacebookIcon className="icon"/>
          </IconButton>
        </div>
    </div>
  )
}

export default Login