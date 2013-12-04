udare.service = (function(services, injector, log, undefined) {
  log.info('udare.service');

  var Service = function(name, service) {
    this.name = name;
    service.apply(this, injector.inject(service));
  };

  return function(name, service) {
    return services[name] = new Service(name, service);
  };  
})(udare.services, udare.injector, udare.log);