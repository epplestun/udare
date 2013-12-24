udare.controller = (function(controllers, scope, injector, q, log, undefined) {
  log.info('udare.controller');
  
  var Controller = function(name, controller) {
    this.name = name;
    this.controller = controller;

    this.dependencies = injector.inject(controller);
  };
  Controller.prototype.init = function(scope) {
    this.scope  = scope;

    var dependencies = [];
    
    dependencies.unshift(scope);
    dependencies = dependencies.concat(this.dependencies);

    this.controller.apply(this.controller, dependencies);
  };

  return function(name, controller) {
    return controllers[name] = new Controller(name, controller);
  };
})(udare.controllers, udare.scope, udare.injector, udare.q, udare.log);