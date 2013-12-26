udare.module = (function(modules, injector, log, undefined) {
  log.info('udare.module');
  
  var Module = function(name, dependencies) {
    /*
    if(dependencies.length > 0)
      console.log('module', dependencies);
    */

    this.name = name;
    this.dependencies = dependencies;

    /*
    this.controllers = {};
    this.services = {};
    this.filters = {};
    this.formatters = {};
    this.components = {};
    */
  };
  Module.prototype.config = function(f) {
    f.apply(f, injector.inject(f));
  };
  Module.prototype.run = function(f) {
    f.apply(f, injector.inject(f));
  };
  Module.prototype.filter = function(name, filter) {
    udare.filter(name, filter);
  };
  Module.prototype.formatter = function(name, formatter) {
    udare.formatter(name, formatter);
  };
  Module.prototype.controller = function(name, controller) {
    udare.controller(name, controller, this.name);
  };
  Module.prototype.service = function(name, service) {
    udare.service(name, service, this.name);
  };
  Module.prototype.component = function(name, component) {
    udare.component(name, component);
  };

  return function(name, dependencies) {
    return modules[name] = new Module(name, dependencies);
  };
})(udare.modules, udare.injector, udare.log);