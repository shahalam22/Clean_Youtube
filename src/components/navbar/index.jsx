import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button, Container, Link } from '@mui/material';
// import { useState } from 'react';
// import PlaylistForm from '../playlist-form/index';
// import Logo from '../../../public/Black_BG.png';


const Navbar = () => {

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const getPlaylistId = (id) => {
  //   getPlaylistById(id);
  // }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color="default" sx={{py: 2, backgroundColor:'black'}}>
        <Container maxWidth={'lg'}>
          <Toolbar>
            <Stack sx={{flexGrow: 1}}>
              <Link to='/' component={RouterLink} sx={{textDecoration:'none'}}>
                {/* <Typography variant="h4" color={'white'}>
                  <b>CleanTube</b>
                </Typography>
              </Link>
              <Link to='/' component={RouterLink} sx={{textDecoration:'none'}}>
                <Typography variant="body1" color={'white'}>
                  Boost your Concentration
                </Typography> */}
                <img src='../../../public/Black_BG.png' width={'150px'}></img>
              </Link>
            </Stack>
            {/* <Button variant='contained' style={{backgroundColor: '#ff0000'}} onClick={handleClickOpen}>Add Playlist</Button> */}
            <Button variant='contained' style={{backgroundColor: '#ff0000', marginRight: '15px'}}>Login bhai</Button>
            <Button variant='contained' style={{backgroundColor: '#ff0000'}}>Sign Up</Button>
            {/* <PlaylistForm open={open} handleClose={handleClose}/> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;