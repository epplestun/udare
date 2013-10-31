udare.events = (function(d, expressions, undefined) {
  var events = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' ');
  
  var Events = function() {};
  Events.prototype.parse = function(scope, dom) {
    var all = dom ? dom.getElementsByTagName("*") : d.getElementsByTagName("*");
    
    for (var i = 0, max = all.length; i < max; i++) {
      var node = all[i];
      for(var j = 0, el = events.length; j < el; j++) {                    
        if(node.getAttribute('data-' + events[j])) {
          all[i].addEventListener(events[j], function(eventName, event) {
            var f = expressions.parse(event.target.getAttribute('data-' + eventName));
            f.arguments.push(event);

            return scope[f.name].apply(scope[f.name], f.arguments);
          }.bind(this, events[j]), false);
        }
      }
    }
  };

  return new Events();
})(document, udare.expressions);