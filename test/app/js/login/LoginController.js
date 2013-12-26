define([], function() {
  var LoginController = function(scope, log, loginSocketService) {
    console.log('aaaa');

    log.log('LoginController', arguments);
  };

  return LoginController;
});