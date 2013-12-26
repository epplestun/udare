udare.injector = (function(modules, utils, log, undefined) {
  log.info('udare.injector');

  var Injector = function() {};
  Injector.prototype.inject = function(fn, module) {
    var dependencies = [];
    var serviceDependencies = utils.getParamNames(fn);
    
    var others = [];
    var keys = ['controllers', 'services', 'filters', 'formatters', 'components'];
    for(var index in serviceDependencies) {
      var serviceDependency = serviceDependencies[index];

      for(var index in keys) {
        if(utils.ucfirst(serviceDependency) in udare[keys[index]]) {
          dependencies.push(udare[keys[index]][utils.ucfirst(serviceDependency)]);
        }
      }

      if(udare[serviceDependency] && serviceDependency !== 'scope') {
        dependencies.push(udare[serviceDependency]);
      } else if(serviceDependency !== 'scope') {
        others.push(serviceDependency);
      }
    }

    if(others.length > 0) {
      for(var i in others) {
        var other = others[i];
        for(var dep in modules[module].dependencies) {
          if(utils.ucfirst(utils.camelCase(other)) === utils.ucfirst(utils.camelCase(utils.getFuncName(modules[module].dependencies[dep])))) {
            var instance = new modules[module].dependencies[dep];
            dependencies.push(instance);
          }
        }
      }
    }

    return dependencies;
  };

  return new Injector();
})(udare.modules, udare.utils, udare.log);