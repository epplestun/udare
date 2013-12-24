define([
  'udare'
  ], function(udare) {
    
  var filters = udare.module('filters', []);
  filters.filter('order', function(data, direction, options) { // hacer que llegue una copia a la funcion
    var newData = data.slice();

    if(newData && direction && options) {
      newData = newData.sort(function(a, b) {
        if(direction.toUpperCase() === 'ASC')
          return a - b;
        if(direction.toUpperCase() === 'DESC')
          return b - a;
      });

      return this.filter(newData, options);
    }
  });

  return filters;
});