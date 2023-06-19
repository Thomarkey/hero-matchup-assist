const express = require('express');
const app = express();

app.use(express.static('Frontend/dist'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'Frontend/dist' });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on port', process.env.PORT || 8080);
});
