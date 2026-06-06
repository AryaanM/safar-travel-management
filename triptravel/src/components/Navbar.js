import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import './Navbar.css'; // Custom CSS for Navbar

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SAFAR
        </Typography>
        
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        <Button color="inherit" component={Link} to="/destinations">Destinations</Button>
        <Button color="inherit" component={Link} to="/hotels">Hotels</Button>
        <Button color="inherit" component={Link} to="/book-package">Book Package</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button> {/* Link to LoginPage */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
