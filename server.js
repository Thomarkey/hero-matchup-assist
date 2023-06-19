const express = require('express');
const path = require('path');

const app = express();
const distPath = path.join(__dirname, 'Frontend', 'dist', 'frontend');

app.use(express.static(distPath));

app.get('/*', (req, res) => {
  res.setHeader('Cache-Control', 'no-store'); // Set cache control header
  res.sendFile('index.html', { root: distPath });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
