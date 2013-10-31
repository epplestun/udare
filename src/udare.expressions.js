/**
 * TODO
 *
 * use example: expressions.parse(expression)
 *
 * {{ 1 + 2 }}
 * {{ click() }}
 * {{ name.tal }}
 */
udare.expressions = (function(undefined) {
	var parse = function(source) {
      var parts = {};      

      //var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      //var FN_ARG_SPLIT = /,/;
      //var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;

      parts.name = source.match(/^(.*)\(/mi)[1];
      parts.arguments = source.match(/^\s*[^\(]*\(\s*([^\)]*)\)/m)[1].split(/,/);

      //console.log('udare.expressions', parts);
      
      return parts;
  };

  return {
  	parse : parse
  };
})();