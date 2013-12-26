define([
  'udare',
  'login/LoginController',
  'login/LoginSocketService'
  ], function(udare, LoginController, LoginSocketService) {
  
  var login = udare.module('login', []);
  login.controller('LoginController', LoginController);
  //login.service('LoginSocketService', LoginSocketService);

  return login;
});