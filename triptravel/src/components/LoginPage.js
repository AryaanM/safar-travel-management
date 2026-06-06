import React, { useState } from 'react';
import { TextField, Button, Card, Tabs, Tab, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Optional for custom CSS if needed

const LoginPage = () => {
  const [tabIndex, setTabIndex] = useState(0); // Tab state for new user registration or login
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      username: '',
      password: '',
    });
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (login or register)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabIndex === 0) {
      // Handle new user registration logic
      console.log('New User Data:', formData);
    } else {
      // Handle login logic (example: username/password validation)
      console.log('Login Data:', formData);
    }

    // Simulate a successful login or registration
    navigate('/profile', { state: formData });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ padding: 4, maxWidth: 400, borderRadius: '10px', boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {tabIndex === 0 ? 'Register' : 'Login'}
        </Typography>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="New User Registration" />
          <Tab label="Login" />
        </Tabs>

        {/* Registration Form */}
        {tabIndex === 0 && (
          <Box mt={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        )}

        {/* Login Form */}
        {tabIndex === 1 && (
          <Box mt={2}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            marginTop: 2,
            width: '100%',
            backgroundColor: '#008080', // Custom bluish-green color
            '&:hover': {
              backgroundColor: '#005959',
            },
          }}
        >
          {tabIndex === 0 ? 'Register' : 'Login'}
        </Button>
      </Card>
    </Box>
  );
};

export default LoginPage;
