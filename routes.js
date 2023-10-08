'use strict';
let HomeControllers = require('./controllers/HomeControllers');
let crawlData = require('./controllers/crawlData')
module.exports = function(app) {


  // todoList Routes
  app.route('/')
    .get(HomeControllers.home)
  app.route('/search')
    .get(crawlData.getImagesData)

 
};
