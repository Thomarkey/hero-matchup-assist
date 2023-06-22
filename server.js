const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'https://dota-hero-matchup-cfe3a3ef874f.herokuapp.com'
}));

const distPath = path.join(__dirname, 'Frontend', 'dist', 'frontend');

// Set cache control headers for static files
app.use(express.static(distPath, { setHeaders: (res, filePath) => {
  if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
    res.setHeader('Cache-Control', 'no-store');
  }
}}));

// Define the middleware function
const setJsonContentType = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'https://dota-hero-matchup-cfe3a3ef874f.herokuapp.com');
  next(); // Call next to proceed to the next middleware or route handler
};

// Apply the middleware to all API calls
app.use('/', setJsonContentType);

const port = process.env.PORT || 8080;
const host = process.env.HOST ||'0.0.0.0';

app.listen(port, host, () => {
  console.log('Server is running on port', port);
});
