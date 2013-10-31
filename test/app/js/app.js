define([
  'udare',
  'model1/controllers/Model1Controller',
  'model2/controllers/Model2Controller',
  ], function(udare) {
  var app = udare.module('App', [udare.routerProvider]);
  app.config(function(routerProvider) {
    routerProvider
      .when('/view1', { 
        view : {
          template: 'templates/model1/view.html', 
          id : 'mainView'
        },
        controller: 'Model1Controller' 
      })
      .when('/view2', { 
        view : {
          template: 'templates/model2/view.html', 
          id : 'mainView'
        },
        controller: 'Model2Controller' 
      });
  });

  return app;
});