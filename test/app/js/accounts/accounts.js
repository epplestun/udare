define([
  'udare',
  'accounts/controllers/AccountsController',
  'accounts/controllers/AccountController',
  'accounts/services/AccountsService',
  ], function(udare, AccountsController, AccountController, AccountsService) {
  
  var accounts = udare.module('accounts', []);
  accounts.service('AccountsService', AccountsService);
  accounts.controller('AccountsController', AccountsController);
  accounts.controller('AccountController', AccountController);

  return accounts;
});