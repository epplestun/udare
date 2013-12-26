define([
  'udare',
  'login/LoginController',
  'login/LoginSocketService',
  ], function(udare, LoginController, LoginSocketService) {
  
  var login = udare.module('login', [LoginSocketService]);
  login.controller('LoginController', LoginController);

  return login;
});