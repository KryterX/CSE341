const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Kevin Blau');
});

module.exports = routes;
