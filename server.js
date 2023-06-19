const express = require('express');
const path = require('path');

const app = express();
const distPath = path.join(__dirname, 'Frontend', 'dist', 'frontend');

// Set cache control headers for static files
app.use(express.static(distPath, { setHeaders: (res, filePath) => {
  if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
    res.setHeader('Cache-Control', 'no-store');
  }
}}));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: distPath });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
