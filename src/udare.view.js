udare.view = (function(d, events, undefined) {
  var View = function(template, container) {
    this.template  = template;
    this.container = d.getElementById(container);
  };
  View.prototype.setSource = function(source) {
    this.source = source;
  };
  View.prototype.getSource = function() {
    return this.source;
  };
  View.prototype.getTemplate = function() {
    return this.template;
  };
  View.prototype.getContainer = function() {
    return this.container;
  };
  View.prototype.render = function() {
    this.getContainer().innerHTML = this.getSource();
  };
  View.prototype.parse = function(scope) {
    console.log('view.parse');
    // Hogan
    //var template = Hogan.compile(this.getSource());
    //var output = template.render(scope);

    // Handlebars
    var template = Handlebars.compile(this.getSource());
    var output   = template(scope);

    this.getContainer().innerHTML = output;

    events.parse(scope, this.getContainer());
  };

  return function(view) {
    return new View(view.template, view.id);
  };
})(document, udare.events);