import React from 'react'
import { Box, Grid, TextField, Input, InputLabel, Button, Divider } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
// import Draggable from 'react-draggable';


export default function Login() {
  const nevigate = useNavigate();

  const handleLogin = () => {
    nevigate('/home');
  }

  const handleSignUp = () => {
    nevigate('/register');
  }

  const handleForgotPassword = () => {
    nevigate('/');
  }

  return (
    <Box style={{
      backgroundColor: '#282828',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      fontFamily: ' Verdana, Geneva, Tahoma, sans-serif',
      position: 'relative',
      zIndex: '1'
    }}>
      <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
        <Grid item>
          <h1 style={{fontSize: '3.3rem', marginBottom: '0px'}}>Login</h1>
          <p style={{fontSize: '1.0rem', marginBottom: '40px', marginTop: '0px'}}>Welcome Back! Provide Credentials to Continue</p>        
        </Grid>
        <Grid item style={{padding: '60px', width: '470px', paddingBottom: '30px', color: 'white'}}>
          <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem', marginTop: '10px'}}>Username</InputLabel>
          <Input
            sx={{color: 'white'}} 
            type="text"
            label="Standard"
            variant="standard"
            placeholder="Enter your Name"
            fullWidth
          />
          <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem', marginTop: '40px'}}>Password</InputLabel>
          <Input
            sx={{color: 'white'}} 
            type="password"
            label="Standard"
            variant="standard"
            placeholder="Enter your password"
            fullWidth
          />
          <Button variant="contained" fullWidth style={{marginTop: '60px', backgroundColor: '#ff0000'}} onClick={handleLogin}>Login</Button>
        </Grid>
        <Grid item style={{margin: '50px'}}>
            <Button style={{textDecoration: 'none', color: '#ff0000', marginBottom: '50px'}} onClick={handleForgotPassword}>Forgot Password?</Button>
            <br />
            <br />
            <p>Don't have an Account? <Button variant='text' style={{textDecoration: 'none', color: '#ff0000'}} onClick={handleSignUp}>Sign Up!</Button></p>
            <br />
            <br />
            <br />
            <br />
        </Grid>
      </Grid>

      <div style={{
        position: 'absolute', 
        top: '-160px', 
        right: '0', 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: '-1'
      }}>
        <img src="../../../public/login_trans.png" alt="login" style={{height: '30%', opacity: '40%'}}/>
      </div>

    </Box>
  )
}
