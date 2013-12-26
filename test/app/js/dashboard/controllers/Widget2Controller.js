define([], function() {
  var Widget2Controller = function(scope, log) {
    //scope.widget = "Widget2Controller";

    scope.click = function() {
      alert(scope.widget);
    };
    
    //log.log('Widget2Controller', scope);
  };

  return Widget2Controller;
});