udare.module = (function(undefined) {
  var Module = function(name, dependencies) {
    this.name = name;
    this.dependencies = dependencies;
  };
  Module.prototype.config = function(f) {
    f.apply(f, this.dependencies);
  };

  return function(name, dependencies) {
    return new Module(name, dependencies);
  };
})();