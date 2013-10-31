udare.scope = (function(utils, undefined) {
  var Scope = function(view) {
    this.id = utils.createUUID();

    var re = /data-model=["'](\w+)["']/gm,
      match,
      results = [];

    do {
      match = re.exec(view.getSource());
      if (match) {
        Object.defineProperty(this, match[1], {
          enumerable: true,
          writable: true,
          configurable: true,
          value: null
        });
        
        this.watch(match[1], function(id, oldval, newval) {
          var aux = {};
          aux[id] = newval;
        
          //self[id] = newval;

          view.parse(this);

          return newval;
        }.bind(this));
      }
    } while (match);
  };

  return function(view) {
    return new Scope(view);
  };
})(udare.utils);