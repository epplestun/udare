define([], function() {  
  
  var AccountsController = function(scope, log, accountsService, accountsSocket) {
    scope.accounts = [];

    function loadAccounts() {
      accountsService.loadAccounts().then(function(data) {
        scope.accounts = data;
      });
    };

    loadAccounts();
    
    accountsSocket.onAccountsChange(loadAccounts);

    scope.add = function() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;

      accountsService.addAccount(name, email, phone).then(function(data) {
        accountsSocket.accountChange();

        alert('New account created');
      });

    	document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = "";

      return false;
    };

    scope.edit = function(id, e) {
      e.stopPropagation();
      e.preventDefault();

      accountsService.loadAccountById(id).then(function(data) {
        scope.accountId = id;
        document.getElementById('name').value = data.name;
        document.getElementById('email').value = data.email;
        document.getElementById('phone').value = data.phone;
      });
    };

    scope.update = function() {
      var id    = scope.accountId;
      var name  = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;

      accountsService.updateAccount(id, name, email, phone).then(function(data) {
        accountsSocket.accountChange();

        alert('Account edited');
      });

      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = "";
    };

    scope.remove = function(id, e) {
    	e.stopPropagation();
    	e.preventDefault();

      accountsService.removeAccount(id).then(function(data) {
        accountsSocket.accountChange();

        alert('Account deleted');
      });
    };

    scope.view = function(id, e) {
      e.stopPropagation();
      e.preventDefault();

      accountsService.loadAccountById(id).then(function(data) {
        //alert('New account created');
        log.log(data);
      });
    };

    //log.log('AccountsController', scope, accountsService);
  };

  return AccountsController;
});