udare.logProvider = (function(undefined) {
  var LogProvider = function() {
    this.enabled = true;
  };
  LogProvider.prototype.setEnabled = function(enabled) {
    this.enabled = enabled;
  };
  LogProvider.prototype.debug = function() {
    !!this.enabled && console.debug(arguments);
  };
  LogProvider.prototype.error = function() {
    !!this.enabled && console.error(arguments);
  };
  LogProvider.prototype.info = function() {
    !!this.enabled && console.info(arguments);
  };
  LogProvider.prototype.log = function() {
    !!this.enabled && console.log(arguments);
  };
  LogProvider.prototype.warn = function() {
    !!this.enabled && console.warn(arguments);
  };

  var provider = new LogProvider();
  provider.info('udare.logProvider');

  return provider;
})();

udare.log = udare.logProvider;