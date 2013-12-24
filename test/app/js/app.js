define([
  'udare',
  'filters/filters',
  'formatters/formatters',
  'login/login',
  'menu/menu',
  'components/components',
  'dashboard/dashboard',
  'accounts/accounts'
  ], function(udare) {

  var app = udare.module('App', [
    udare.requestProvider,
    udare.routerProvider, 
    udare.logProvider, 
    udare.restfulProvider, 
    udare.stateProvider
  ]);
  app.config(function(requestProvider, routerProvider, logProvider, restfulProvider, stateProvider) {
    //
    // RequestProvider config
    //
    requestProvider.enableCredentials();

    //
    // StateProvider config
    //
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
      .state('account', {
        url : '/accounts/:id',
        layout : 'layout',
        views : {
          content : {
            template : 'templates/accounts/detail.html',
            controller : 'AccountController'
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

    //
    // RouterProvider config
    //
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

    //
    // LogProvider config
    //
    logProvider
      .setEnabled(true);

    //
    // RestfulProvicer config
    //
    restfulProvider
      .setBaseUrl('http://192.168.0.192:3000')
      .setRequestInterceptor(null)
      .setErrorInterceptor(null);
  });
  app.run(function(stateProvider) {
    stateProvider.init();
  });

  return app;
});