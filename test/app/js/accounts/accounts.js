define([
  'udare',
  'accounts/controllers/AccountsController',
  'accounts/services/AccountsService',
  ], function(udare, AccountsController, AccountsService) {
  
  var accounts = udare.module('accounts', []);
  accounts.service('AccountsService', AccountsService);
  accounts.controller('AccountsController', AccountsController);

  return accounts;
});