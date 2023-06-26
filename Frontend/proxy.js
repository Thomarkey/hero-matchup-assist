const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/*',
    proxy({
      target: 'https://dota-hero-matchup-cfe3a3ef874f.herokuapp.com',
      secure: true,
      changeOrigin: true,
    })
  );
};
