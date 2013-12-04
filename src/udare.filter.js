udare.filter = (function(filters, log, H, undefined) {
  log.info('udare.filter');

	var Filter = function(name, filter) {
    H.registerHelper(name, function() {
      return filter.apply(this, arguments);
    }.bind(this));
	};
  Filter.prototype.filter = function(data, options) {
    var o = [];

    for(var i = 0, l = data.length; i < l; i++) {
      options.data.index = i;
      o.push(options.fn(data[i], options.data));
    }

    return o.join("");
  };
  
	return function(name, filter) {
		return filters[name] = new Filter(name, filter);
	}
})(udare.filters, udare.log, Handlebars);