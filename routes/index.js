const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Tasia Blau');
});

module.exports = routes;
