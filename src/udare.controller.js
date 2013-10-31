udare.controller = (function(controllers, scope, undefined) {
  var Controller = function(name, controller) {
    this.name = name;
    this.controller = controller;
  };
  Controller.prototype.init = function(view) { 
    view.render();

    var controllerScope = scope(view);     
    this.controller.call(this.controller, controllerScope); 
    
    view.parse(controllerScope);
  };
  
  return function(name, controller) {
    return controllers[name] = new Controller(name, controller);
  };
})(udare.controllers, udare.scope);