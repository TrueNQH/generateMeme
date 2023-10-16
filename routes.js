'use strict';
let HomeControllers = require('./controllers/HomeControllers');

module.exports = function(app) {


  // todoList Routes
  app.route('/')
    .get(HomeControllers.home)
  app.route('/search')
    .get(HomeControllers.search)

 
};
