udare.watcher = (function(utils, log, undefined) {
	log.info('udare.watcher');

	var watchers = {};

	var Watcher = function() {
	};
	Watcher.prototype.watch = function(obj, watcher) {
		var watcherId = utils.createUUID();

		var oldval = JSON.stringify(obj);
		watchers[watcherId] = setInterval(function() {
  		var newval = JSON.stringify(this);
  		if(oldval !== newval) {
    		oldval = newval;

    		watcher.call(watcher, this);
  		} 
  	}.bind(obj), 50);
	};
	Watcher.prototype.unwatch = function(id) {
		clearInterval(watchers[id]);
	};

	return new Watcher();
})(udare.utils, udare.log);