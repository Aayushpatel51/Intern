import React from 'react'
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';


function Home({user}) {

  const facebook = () =>{
    window.open("http://localhost:5000/auth/facebook", "_self")
  }
  const instagram = () =>{
    window.open("http://localhost:5000/auth/instagram", "_self")
  }
  const github = () =>{
    window.open("http://localhost:5000/auth/github", "_self")
  }
  const google = () =>{
    window.open("http://localhost:5000/auth/google", "_self")
  }
  const twitch = () =>{
    window.open("http://localhost:5000/auth/twitch", "_self")
  }
  const spotify = () =>{
    window.open("http://localhost:5000/auth/spotify", "_self")
  }

  return (
    <>
    <div className="social"> 
      <IconButton color="primary" className="social-icon" aria-label="add to shopping cart" onClick={facebook}>
        <FacebookIcon className="icon"/>
      </IconButton>
      <IconButton color="secondary" className="social-icon" aria-label="add an alarm" onClick={instagram}>
        <InstagramIcon className="icon"/>
      </IconButton>
      <IconButton color="secondary" className="social-icon" aria-label="add an alarm" onClick={github}>
        <GitHubIcon className="icon"/>
      </IconButton>
      <IconButton color="error" className="social-icon" aria-label="add an alarm" onClick={google}>
        <GoogleIcon className="icon"/>
      </IconButton>
      <IconButton color="secondary" className="social-icon" aria-label="add an alarm" onClick={twitch}>
        <Icon icon="mdi:twitch" width="84" height="84" />
      </IconButton>
      <IconButton color="success" className="social-icon" aria-label="add an alarm" onClick={spotify}>
        <Icon icon="akar-icons:spotify-fill" width="84" height="84" />
      </IconButton>
    </div>
    <div className="avatar">
      {
        user ? (<Avatar alt="Remy Sharp" src={user.photos[0].value} />): null
      }
    </div>
    </>
  )
}

export default Home