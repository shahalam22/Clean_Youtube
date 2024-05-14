import React, { useState } from 'react';
// import Image from 'next/image';
import { Box, Grid, TextField, Input, InputLabel, Button, Divider } from '@mui/material';
import PlaylistForm from '../playlist-form';
import Image from 'next/image';
// import { Input } from '@mui/icons-material';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        style={{
          textAlign: 'center',
          backgroundColor: '#282828',
          color: 'white',
          paddingBottom: '50px',
          fontFamily: ' Verdana, Geneva, Tahoma, sans-serif',
        }}
      >
        <Grid container spacing={2} 
          style={{
            textAlign: 'center',
            margin: 'auto',
            padding: '20px',
          }}
        >
          <Grid item xs={12} sm={6} style={{margin: 'auto'}}>
            <h1
              style={{fontSize: '3.5rem'}}>Clean<span style={{color: '#ff0000'}}>Tube</span></h1>
            <p style={{fontSize: '1.5rem'}}>Your <span style={{color: '#ff0000'}}>YouTube</span>, your <span style={{color: '#ff0000'}}>way</span>.
              <br/> <span style={{color: '#ff0000'}}>Playlists</span> and <span style={{color: '#ff0000'}}>Notes</span> at your say
            </p>
          </Grid>
          <Grid item xs={12} sm={6}
            style={{
              margin: 'auto',
              padding: '30px',
            }}
          >
            <Image src="/Cleantube_Home1.png" alt="youtube_illustration" style={{objectFit: 'cover', width: '80%', height: '80%'}}/>
          </Grid>
        </Grid>

        <Grid container direction={"column"} spacing={2}>
          <Button variant='contained' style={{backgroundColor: '#ff0000', margin: "40px auto 0 auto", padding: '15px 40px', borderRadius: '15px'}} onClick={handleClickOpen}>Add Playlist</Button>
          <p style={{marginBottom:'20px', fontSize: '13px'}}>(Demo test perpouse)</p>
          <PlaylistForm open={open} handleClose={handleClose}/>   
        </Grid>  
                 
      </Box>

      <Box style={{
        backgroundColor: '#ff0000',
        color: '#282828',
        textAlign: 'center',
        padding: '20px',
        fontFamily: ' Verdana, Geneva, Tahoma, sans-serif',
      }}>
        {/* <Grid> */}
          <Grid>
            <h1 style={{fontSize: '3.3rem', marginBottom: '0px'}}>Features</h1>
            <p style={{fontSize: '1.0rem', marginBottom: '40px', marginTop: '0px'}}>Focus & Make Note on What Matters</p> 
          </Grid>
          <Grid container spacing={'2'}>
            <Grid item xs={12} md={6}
              style={{
                margin: 'auto',
                padding: '30px',
              }}
            >
              <img src="../../../public/feature_trans.png" alt="youtube_illustration" style={{objectFit: 'cover', width: '80%', height: '80%'}}/>
            </Grid>
            <Grid item xs={12} md={6} style={{marginBottom: '25px'}}>
              <Grid item xs={12} style={{padding: '30px'}}>
                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd"/>
                </svg>
                <h2 style={{fontSize: '2rem', margin: '0px'}}>Add Playlists</h2>
                <p style={{fontSize: '1.3rem', margin: '0px'}}>Add playlists of your favorite videos and watch them later</p>
              </Grid>
              <Grid item xs={12} style={{padding: '30px'}}>
                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                </svg>
                <h2 style={{fontSize: '2rem', margin: '0px'}}>Add Notes</h2>
                <p style={{fontSize: '1.3rem', margin: '0px'}}>Add notes to your playlists and videos for future reference</p>
              </Grid>
              <Grid item xs={12} style={{padding: '30px'}}>
                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z" clipRule="evenodd"/>
                </svg>
                <h2 style={{fontSize: '2rem', margin: '0px'}}>Distraction Free</h2>
                <p style={{fontSize: '1.3rem', margin: '0px'}}>No suggestions for related videos. Only watch what you want.</p>
              </Grid>
            </Grid>
          </Grid>
        {/* </Grid> */}
      </Box>

      <Box
        style={{
          backgroundColor: '#282828',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          fontFamily: ' Verdana, Geneva, Tahoma, sans-serif',
        }}
      >
        <Grid>
          <h1 style={{fontSize: '3.3rem', marginBottom: '0px'}}>How To Use</h1>
          <p style={{fontSize: '1.0rem', marginBottom: '50px', marginTop: '0px'}}>It's time to unlock the User Manual</p> 
        </Grid>
        <Grid container direction={"row-reverse"} spacing={'2'}>
          <Grid item xs={12} md={6}
            style={{
              margin: 'auto',
              padding: '30px',
            }}
          >
            <img src="../../../public/howToUse_trans.png" alt="youtube_illustration" style={{objectFit: 'cover', width: '80%', height: '80%'}}/>
          </Grid>
          <Grid item xs={12} md={6} style={{marginBottom: '25px'}}>
            <Grid item xs={12} style={{padding: '30px'}}>
              <h2 style={{fontSize: '2.8rem', margin: '0px'}}>1</h2>
              <p style={{fontSize: '1.3rem', margin: '0px'}}>Copy the <span style={{color: '#ff0000'}}>URL</span> or the <span style={{color: '#ff0000'}}>PLAYLIST ID</span> of the desired playlist</p>
            </Grid>
            <Grid item xs={12} style={{padding: '30px'}}>
              <h2 style={{fontSize: '2.8rem', margin: '0px'}}>2</h2>
              <p style={{fontSize: '1.3rem', margin: '0px'}}>Click on <span style={{color: '#ff0000'}}>ADD PLAYLIST</span> button & paste the copied URL or ID</p>
            </Grid>
            <Grid item xs={12} style={{padding: '30px'}}>
              <h2 style={{fontSize: '2.8rem', margin: '0px'}}>3</h2>
              <p style={{fontSize: '1.3rem', margin: '0px'}}>Click on the <span style={{color: '#ff0000'}}>Play Videos</span> button on the playlist card & Enjoy videos.</p>
            </Grid>
            <Grid item xs={12} style={{padding: '30px'}}>
              <h2 style={{fontSize: '2.8rem', margin: '0px'}}>4</h2>
              <p style={{fontSize: '1.3rem', margin: '0px'}}>To add notes click on the <span style={{color: '#ff0000'}}>Text Area</span> and write down your understandings.</p>
            </Grid>
            <Grid item xs={12} style={{padding: '30px'}}>
              <h2 style={{fontSize: '2.8rem', margin: '0px'}}>5</h2>
              <p style={{fontSize: '1.3rem', margin: '0px'}}>Click on the <span style={{color: '#ff0000'}}>Save</span> Button to save you understandings for further use.</p>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box style={{
        backgroundColor: '#ff0000',
        color: '#282828',
        textAlign: 'center',
        padding: '20px',
        fontFamily: ' Verdana, Geneva, Tahoma, sans-serif',
      }}>
        {/* <Grid> */}
          <Grid>
            <h1 style={{fontSize: '3.3rem', marginBottom: '0px'}}>Contact Us</h1>
            <p style={{fontSize: '1.0rem', marginBottom: '40px', marginTop: '0px'}}>Let's Connect for Your Kind Feedback</p> 
          </Grid>
          <Grid container spacing={2} style={{marginBottom: '25px'}}>
            <Grid item xs={12} md={5} style={{
                padding: '30px',
                backgroundColor: '#282828',
                color: 'white',
                margin: '50px',
                borderRadius: '20px',
              }}>
              <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" viewBox="0 0 24 24" style={{marginTop: '50px'}}>
                <path fillRule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clipRule="evenodd"/>
              </svg>
              <h2 style={{fontSize: '2rem', margin: '0px'}}>Feedback</h2>
              <p style={{fontSize: '1.3rem', margin: '0px'}}>We need your valuable feedback <br />to make it more accecible for you</p>
              <Grid style={{padding: '60px', paddingBottom: '30px', color: 'white'}}>
                <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem'}}>Name</InputLabel>
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
                  placeholder="Enter your email address"
                  fullWidth
                />
                <InputLabel style={{color: 'white', textAlign: 'left', fontSize: '0.8rem', marginTop: '30px'}}>FeedBack</InputLabel>
                <Input
                  sx={{color: 'white'}} 
                  type=""
                  label="Standard"
                  variant="standard"
                  multiline
                  rows={4}
                  placeholder="Provide your feedback here"
                  fullWidth
                />
                <Button variant="contained" style={{marginTop: '50px', backgroundColor: '#ff0000'}}>Submit</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{padding: '130px 30px 30px 30px', position: 'relative', zIndex: '1'}}>
              <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
              <h2 style={{fontSize: '2rem', margin: '0px'}}>Our Info</h2>
              <Grid style={{
                color: '#282828',
                textAlign: 'left',
                padding: '30px 30px 0px 30px',
              }}>
                <p style={{fontSize: '1.3rem'}}><b>Location</b></p>
                <Divider sx={{backgroundColor: '#282828', height: '2px'}}/>
                <p>Institute of Information Technology<br />University of Dhaka, Dhaka-1000</p>
              </Grid>
              <Grid style={{
                color: '#282828',
                textAlign: 'left',
                padding: '15px 30px 0px 30px',
              }}>
                <p style={{fontSize: '1.3rem'}}><b>Electronic Mail</b></p>
                <Divider sx={{backgroundColor: '#282828', height: '2px'}}/>
                <p>bsse1439@iit.du.ac.bd<br />shahalamabir21@gmail.com</p>
              </Grid>
              <Grid style={{
                color: '#282828',
                textAlign: 'left',
                padding: '15px 30px 0px 30px',
              }}>
                <p style={{fontSize: '1.3rem'}}><b>Contact No</b></p>
                <Divider sx={{backgroundColor: '#282828', height: '2px'}}/>
                <p>01823168445<br />01869230211</p>
              </Grid>

              <div style={{
                position: 'absolute', 
                top: '130px', 
                right: '-30px', 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'rgba(0, 0, 0, 0)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                zIndex: '-1'
              }}>
                <img src="../../../public/contact_trans.png" alt="login" style={{height: '50%', opacity: '50%'}}/>
              </div>

            </Grid>
            <p style={{margin: 'auto', paddingTop: '50px', fontSize: '13px'}}>Copyright: Shah Alam Abir</p>
          </Grid>
        {/* </Grid> */}
      </Box>
    </>
  )
}
