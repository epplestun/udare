udare.injector = (function(modules, utils, log, undefined) {
  log.info('udare.injector');

  var Injector = function() {};
  Injector.prototype.inject = function(fn, module) {
    var dependencies = [];
    var serviceDependencies = utils.getParamNames(fn);
    
    var keys = ['controllers', 'services', 'filters', 'formatters', 'components'];
    for(var index in serviceDependencies) {
      var serviceDependency = serviceDependencies[index];

      for(var index in keys) {
        if(serviceDependency in udare[keys[index]]) {
          dependencies.push(udare[keys[index]][serviceDependency]);
        }
      }

      if(udare[serviceDependency] && serviceDependency !== 'scope') {
        dependencies.push(udare[serviceDependency]);
      }
    }

    return dependencies;
  };

  return new Injector();
})(udare.modules, udare.utils, udare.log);