define([], function() {
  var Test1Component = function(log) {
    return {
      restrict : 'E', // E = Element, A = Attribute, C = Class
      template : '<div><button data-click="alert()">{{test1component}}</button><b>xxx</b></div>',
      replace : true,
      //templateUrl : '',
      link : function(scope, element, attrs) {
        //console.log('Test1Component.link', scope, element, attrs);
      }
    }
  };

  return Test1Component;
});