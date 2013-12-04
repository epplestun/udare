udare.module = (function(log, undefined) {
  log.info('udare.module');
  
  var Module = function(name, dependencies) {
    this.name = name;
    this.dependencies = dependencies;
  };
  Module.prototype.config = function(f) {
    f.apply(f, this.dependencies);
  };
  Module.prototype.filter = function(name, filter) {
    udare.filter(name, filter);
  };
  Module.prototype.formatter = function(name, formatter) {
    udare.formatter(name, formatter);
  };
  Module.prototype.controller = function(name, controller) {
    udare.controller(name, controller);
  };
  Module.prototype.service = function(name, service) {
    udare.service(name, service);
  };
  Module.prototype.component = function(name, component) {
    udare.component(name, component);
  };

  return function(name, dependencies) {
    return new Module(name, dependencies);
  };
})(udare.log);