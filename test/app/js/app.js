define([
  'udare',
  'login/login',
  'menu/menu',
  'components/components',
  'dashboard/dashboard',
  'accounts/accounts'
  ], function(udare) {

  var app = udare.module('App', [
    udare.routerProvider, 
    udare.logProvider, 
    udare.restfulProvider, 
    udare.stateProvider
  ]);
  app.filter('order', function(data, direction, options) {
    if(data) {
      data = data.sort(function(a, b) {
        if(direction.toUpperCase() === 'ASC')
          return a - b;
        if(direction.toUpperCase() === 'DESC')
          return b - a;
      });

      return this.filter(data, options);
    }
  });
  app.formatter('phoneNumber', function(phoneNumber) {
    return "(" 
      + phoneNumber.substr(0, 3) 
      + ") " 
      + phoneNumber.substr(3, 3) 
      + "-" 
      + phoneNumber.substr(6, 4);
  });
  app.config(function(routerProvider, logProvider, restfulProvider, stateProvider) {
    // StateProvider config
    stateProvider
      .state('layout', {
        url : '',
        isLayout : true,
        abstract : true,
        template : 'templates/layout/layout.html'
      })
      .state('menu', {
        url : '',
        abstract : true,
        template : 'templates/menu/menu.html',
        controller : 'MenuController'
      })
      .state('login', {
        url : '/login',
        template : 'templates/login/login.html',
        controller : 'LoginController'
      })
      .state('dashboard', {
        url : '/dashboard',
        layout : 'layout',
        views : {
          lateral : {
            template : 'templates/dashboard/lateral.html',  
            controller : 'DashboardController'
          },

          content : {
            template : 'templates/dashboard/content.html',  
            controller : 'DashboardController'
          }
        }
      })
      .state('accounts', {
        url : '/accounts',
        layout : 'layout',
        views : {
          content : {
            template : 'templates/accounts/view.html',
            controller : 'AccountsController'
          }
        }
      });

    // RouterProvider config
    /*
    routerProvider
      .when('/dashboard', { 
        view : {
          template: 'templates/dashboard/view.html', 
          id : 'mainView'
        },
        controller: 'DashboardController' 
      })
      .when('/accounts', { 
        view : {
          template: 'templates/accounts/view.html', 
          id : 'mainView'
        },
        controller: 'AccountsController' 
      });
      */

    // LogProvider config
    logProvider
      .setEnabled(true);

    // RestfulProvicer config
    restfulProvider
      .setBaseUrl('http://localhost:3000')
      .setRequestInterceptor(null)
      .setErrorInterceptor(null);
  });

  //app.component('mycomponent', component);

  return app;
});