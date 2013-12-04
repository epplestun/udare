udare.scope = (function(utils, pubsub, watcher, log, undefined) {
  log.info('udare.scope');

  var Scope = function(vars) {
    try {
      this.id = utils.createUUID();
      
      for(var i = 0, l = vars.length; i < l; i++) {
        Object.defineProperty(this, vars[i], {
          enumerable: true,
          writable: true,
          configurable: true
        });
      }

      watcher.watch(this, function(obj) {
        pubsub.publish('executor.execute', [obj]);
      });
    } catch(e) {
      log.error(e.message);
    }
  };

  return function(vars) {
    return new Scope(vars);
  };
})(udare.utils, udare.pubsub, udare.watcher, udare.log);