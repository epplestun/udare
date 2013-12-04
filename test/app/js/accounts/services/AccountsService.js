define([], function() {
  var AccountsService = function(restful, q, log) {
    this.loadAccounts = function() {  
      var deferred = q.defer();     
  
      restful.all('accounts').getList().then(function(data) {        
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    this.loadAccountById = function(id) {  
      var deferred = q.defer();     
  
      restful.one('accounts', id).get().then(function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    this.addAccount = function(name, email, phone) {
      var deferred = q.defer();     
  
      restful.all('accounts').post({
        name : name,
        email : email,
        phone : phone
      }).then(function(data) {        
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    this.updateAccount = function(id, name, email, phone) {
      var deferred = q.defer();     
  
      restful.one('accounts', id).put({
        name : name,
        email : email,
        phone : phone
      }).then(function(data) {        
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    this.removeAccount = function(id) {
      var deferred = q.defer();     
  
      restful.one('accounts', id).remove().then(function(data) {        
        deferred.resolve(data);
      });

      return deferred.promise;
    };
  };

  return AccountsService;
});