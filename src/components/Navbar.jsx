import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <><Box sx={{ flexGrow: 1, }}>
    <AppBar position="static"sx={{ backgroundColor:'#3C3D37' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
       
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             KaRT
        </Typography>
        <Link to={'/'}><Button  variant='contained' color="secondary" sx={{ margin:3,backgroundColor:'#000000' }} >Home</Button></Link>
        <Link to={'/add'}><Button color="secondary" variant='contained' sx={{ backgroundColor:'#000000' }}>Cart</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
    </>
  )
}

export default Nav
