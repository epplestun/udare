define([
  'udare'
  ], function(udare) {  
  
  return udare.controller('Model2Controller', function(scope) {
    scope.prueba = "hola";
    scope.prueba2 = [
    	{ name: 'udare' },
    	{ name: 'mailuki' }
    ];

    scope.click = function() {
    	alert('click');
    };

    scope.add = function() {
    	scope.prueba = document.getElementById('prueba').value;
	        
    	scope.prueba2 = scope.prueba2.concat([{ 
    		name : scope.prueba
    	}]);
    };

    scope.remove = function(index, e) {
    	e.stopPropagation();
    	e.preventDefault();

    	scope.prueba2.splice(index, 1);

    	return false;
    };
  });
  
});