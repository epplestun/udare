define([], function() {
  var MenuController = function(scope, log) {
    scope.menu = ['dashboard', 'accounts', 'login'];

    log.log('MenuController', scope);
  };

  return MenuController;
});