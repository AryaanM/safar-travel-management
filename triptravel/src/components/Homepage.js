import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './Homepage.css'; // Custom CSS for homepage

const Homepage = () => {
  return (
    <div className="homepage">
      <Container>
        {/* Hero Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1 className="title">SAFAR</h1>
          <p className="tagline">Explore the best travel packages and hotels around the world!</p>
        </motion.div>

        {/* Buttons Section with Grid Layout */}
        <Grid container spacing={3} className="button-container">
          {/* Profile Button */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="button-wrapper">
              <Button
                variant="contained"
                href="/profile"
                className="button-custom"
                disableElevation
              >
                Profile
              </Button>
            </motion.div>
          </Grid>

          {/* Hotels Button */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="button-wrapper">
              <Button
                variant="contained"
                href="/hotels"
                className="button-custom"
                disableElevation
              >
                Hotels
              </Button>
            </motion.div>
          </Grid>

          {/* Book a Package Button */}
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} className="button-wrapper">
              <Button
                variant="contained"
                href="/book-package"
                className="button-custom"
                disableElevation
              >
                Book a Package
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;
