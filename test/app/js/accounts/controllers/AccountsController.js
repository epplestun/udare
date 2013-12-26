define([], function() {  
  
  var AccountsController = function(scope, log, AccountsService, myDependency) {
    scope.accounts = [];
    
    function loadAccounts() {
      AccountsService.loadAccounts().then(function(data) {
        scope.accounts = data;
      });
    };

    loadAccounts();

    scope.add = function() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;

      AccountsService.addAccount(name, email, phone).then(function(data) {
        loadAccounts();
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

      AccountsService.loadAccountById(id).then(function(data) {
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

      AccountsService.updateAccount(id, name, email, phone).then(function(data) {
        loadAccounts();
        alert('Account edited');
      });

      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = "";
    };

    scope.remove = function(id, e) {
    	e.stopPropagation();
    	e.preventDefault();

      AccountsService.removeAccount(id).then(function(data) {
        loadAccounts();
        alert('Account deleted');
      });
    };

    scope.view = function(id, e) {
      e.stopPropagation();
      e.preventDefault();

      AccountsService.loadAccountById(id).then(function(data) {
        //alert('New account created');
        log.log(data);
      });
    };

    log.log('AccountsController', scope, AccountsService);
  };

  return AccountsController;
});