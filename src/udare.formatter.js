udare.formatter = (function(formatters, log, H, undefined) {
  log.info('udare.formatter');

	var Formatter = function(name, formatter) {
    H.registerHelper(name, function() {
      return formatter.apply(this, arguments);
    }.bind(this));
	};
  
	return function(name, formatter) {
		return formatters[name] = new Formatter(name, formatter);
	}
})(udare.formatters, udare.log, Handlebars);