var udare = udare || {};

var udare = (function(undefined) {
  var Udare = function() {
    this.controllers = {};
    this.services = {};
    this.controllersScopes = {};
    this.filters = {};
    this.formatters = {};
    this.components = {};
  };
  Udare.prototype.bootstrap = function(dom, app) {
    //console.log('Udare.prototype.bootstrap', arguments);

    //console.log(dom, app);
  };

  return new Udare();
})();