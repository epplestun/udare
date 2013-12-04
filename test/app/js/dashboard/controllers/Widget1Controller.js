define([], function() {  
  var Widget1Controller = function(scope, log) {
    //scope.widget = "Widget1Controller";
    scope.lista = ['a', 'b', 'c'];
    scope.test1component = "test1component ADIOS!!";

    scope.click = function(e) {
      //e.stopPropagation();
      //e.preventDefault();

      alert(scope.widget);
    };

    scope.alert = function() {
      alert(scope.test1component);
    };

    scope.updateValue = function(value, e) {
      //e.stopPropagation();
      //e.preventDefault();

      scope.widget = value;
    };

    log.log('Widget1Controller', scope);
  };

  return Widget1Controller;
});