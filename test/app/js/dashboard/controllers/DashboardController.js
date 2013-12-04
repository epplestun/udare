define([], function() {
  var DashboardController = function(scope, log) {
    scope.name = "Ivan";
    scope.lastname = "Rodriguez";
    scope.username = "epplestun";
    scope.lista  = [1, 2, 3];
    scope.test1component = "test1component hola!!";
    scope.test1component2 = "test1component2";
    scope.test1component3 = "test1component3";

    //scope.widgetx = "widgetX";

    scope.updateUsername = function(name, e) {
      //e.stopPropagation();
      //e.preventDefault();

      scope.username = +new Date();
    };

    scope.alert = function() {
      alert(scope.test1component);
    };

    scope.click = function() {
      alert('a: ' + scope.widgetx);
    };

    log.log('DashboardController', scope);
  };

  return DashboardController;
});