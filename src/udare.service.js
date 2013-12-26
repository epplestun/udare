udare.service = (function(services, injector, log, undefined) {
  log.info('udare.service');

  var Service = function(name, service, module) {
    this.name = name;
    service.apply(this, injector.inject(service, module));
  };

  return function(name, service, module) {
    return services[name] = new Service(name, service, module);
  };  
})(udare.services, udare.injector, udare.log);