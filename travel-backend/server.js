// Import libraries
require('dotenv').config(); // Loads the .env file
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// PostgreSQL connection setup using Environment Variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test route
app.get('/', (req, res) => {
  res.send('Travel Management Backend is secured and running!');
});

// API to get all hotels
app.get('/hotels', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM hotel');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching hotels:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});