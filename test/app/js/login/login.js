define([
  'udare',
  'login/LoginController'
  ], function(udare, LoginController) {
  
  var login = udare.module('login', []);
  login.controller('LoginController', LoginController);

  return login;
});