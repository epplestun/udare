define([], function() {  
  var AccountController = function(scope, stateProvider, state, log) {

    console.log(state);

    scope.name = state.params.id;
    scope.goToUser = function() {
      stateProvider.goTo('account', {
        id : +new Date()
      });
    };

    //log.log('AccountController', stateProvider);
  };

  return AccountController;
});