import React from 'react'
import { Box, Grid, TextField, Input, InputLabel, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const nevigate = useNavigate();

  const handleLogin = () => {
    nevigate('/login');
  }

  const handleSignUp = () => {
    nevigate('/home');
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
          <h1 style={{fontSize: '3.3rem', marginBottom: '0px'}}>Register</h1>
          <p style={{fontSize: '1.0rem', marginBottom: '40px', marginTop: '0px', padding: '0px 50px 0px 50px'}}>Create New Account to enjoy distruction free Youtube environment</p> 
        </Grid>
        <Grid item style={{padding: '60px', width: '470px', paddingBottom: '30px', color: 'white'}}>
          <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem'}}>Username</InputLabel>
          <Input
            sx={{color: 'white'}} 
            type="text"
            label="Standard"
            variant="standard"
            placeholder="Enter your Name"
            fullWidth
          />
          <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem', marginTop: '30px'}}>Email</InputLabel>
          <Input
            sx={{color: 'white'}} 
            type="email"
            label="Standard"
            variant="standard"
            placeholder="Enter your Email"
            fullWidth
          />
          <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem', marginTop: '30px'}}>Password</InputLabel>
          <Input
            sx={{color: 'white'}} 
            type="password"
            label="Standard"
            variant="standard"
            placeholder="Enter password"
            fullWidth
          />
          <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem', marginTop: '30px'}}>Confirm Password</InputLabel>
          <Input
            sx={{color: 'white'}} 
            type="password"
            label="Standard"
            variant="standard"
            placeholder="Confirm password"
            fullWidth
          />
          <Button variant="contained" fullWidth style={{marginTop: '50px', backgroundColor: '#ff0000'}} onClick={handleSignUp}>Sign Up</Button>
          <br />
          <p>Or</p>
          <Button variant="outlined" color='error' fullWidth style={{marginTop: '0px', backgroundColor: '#282828'}} onClick={handleSignUp}>Sign Up with Google</Button>
        </Grid>
        <Grid item style={{margin: '20px'}}>
            <p>Already have an account? <Button style={{textDecoration: 'none', color: '#ff0000'}} onClick={handleLogin}>Login!</Button></p>
            <br />
            <br />
            <br />
            <br />
        </Grid>
      </Grid>

      <div style={{
        position: 'absolute', 
        top: '-100px', 
        right: '10px', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: '-1'
      }}>
        <img src="../../../public/registration_trans.png" alt="registration" style={{height: '35%', opacity: '40%'}}/>
      </div>

    </Box>
  )
}
