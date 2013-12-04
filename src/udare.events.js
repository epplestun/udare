udare.events = (function(expressions, log, d, undefined) {
  log.info('udare.events');
  
  var events = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' ');
  
  var Events = function(node) {
    this.node = node;
  };
  Events.prototype.parse = function(context) {
    var nodes = this.node.querySelectorAll('*');
    
    for (var i = 0, max = nodes.length; i < max; i++) {
      var node = nodes[i];
      for(var j = 0, el = events.length; j < el; j++) {                    
        if(node.getAttribute('data-' + events[j])) {
          node.addEventListener(events[j], function(eventName, ctx, event) {
            var f = expressions.parse(event.target.getAttribute('data-' + eventName));
            f.arguments.push(event);

            var callbackParts = f.name.split('.');
            var ctrl  = callbackParts[0];
            var fname = callbackParts[1]

            ctx[ctrl][fname].apply(ctx[ctrl][fname], f.arguments);          
          }.bind(this, events[j], context), false);
        }
      }
    }
  };

  return function(node) {
    return new Events(node);
  }
})(udare.expressions, udare.log, document);