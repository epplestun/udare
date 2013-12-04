udare.compiler = (function(componentsRepository, controllersRepository, utils, scope, filters, q, log, undefined) {
  log.info('udare.compiler');

  var Compiler = function() {};
  Compiler.prototype.replace = function(html, matches) {
    var output = html;
    for(var i = 0, l = matches.length; i < l; i++) {
      var match = matches[i];
      output = output.replace(match.oldtext, match.newtext);
    }

    return output;
  };
  Compiler.prototype.compile = function(html, mainCrtl, callback) {
    html = html.split("\n").join("");

    (function() {
      var controllers = {};

      if(mainCrtl) {
        controllers[mainCrtl] = {
          vars : []
        };
      }

      var deferred = q.defer();
      var ctrlIndex = 0;
      var tagCtrl = null;
      var output = [];

      var intoList = false;

      var events = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' ');

      htmlParser(html, {
        start: function(tag, attrs, unary) {
          for(var i = 0, l = attrs.length; i < l; i++) {
            var attr = attrs[i];

            if(attr.name === 'data-controller') {
              ctrlIndex++
              tagCtrl = tag;
              controllers[attr.value] = {
                vars : []
              };
            }

            if(attr.name === 'data-model') {
              var ctrlName = Object.keys(controllers)[ctrlIndex];
              controllers[ctrlName].vars.push(attr.value);
            }

            if(attr.name.substring(0, 4) === 'data' && attr.name !== 'data-controller') {
              var ctrlName = Object.keys(controllers)[ctrlIndex];

              output.push({
                oldtext : attr.name + '="' + attr.value + '"',
                newtext : attr.name + '="' + ctrlName + '.' + attr.value + '"'
              });
            }

            /*
            if(attr.name.substring(0, 4) === 'data') {
              var eventName = attr.name.split('-')[1];
              if(events.indexOf(eventName) > -1) {              
                var ctrlName = Object.keys(controllers)[ctrlIndex];

                output.push({
                  oldtext : attr.name + '="' + attr.value + '"',
                  newtext : attr.name + '="' + ctrlName + '.' + attr.value + '"'
                });
              }
            }
            */
          }
        },
        end: function(tag) {
          if(tagCtrl === tag) {
            --ctrlIndex;
          }
        },
        chars: function(text) {
          var ctrlName = Object.keys(controllers)[ctrlIndex];
          
          var testPattern = /{{.*}}/;
          var matchPattern = /{{([^}}]+)}}/g;

          if(testPattern.test(text)) {
            var newtext = text.replace(matchPattern, function(match, name) {
              if(name !== '.') {
                if(name.charAt(0) === '#') {
                  intoList = true;

                  var parts = name.split(" ");
                  if(parts.length > 1) {
                    return '{{' + parts[0] + " " + ctrlName + '.' + parts[1]  + ' ' + parts.splice(2, parts.length).join(" ") + '}}';
                  }

                  return '{{#' + ctrlName + '.' + name.substring(1, name.length) + '}}';
                }

                if(name.charAt(0) === '/') {
                  intoList = false;

                  if(Object.keys(filters).indexOf(name.substring(1, name.length)) === -1) {
                    return '{{/' + ctrlName + '.' + name.substring(1, name.length) + '}}';
                  } else {
                    return '{{' + name + '}}'; 
                  }
                }

                if(name.charAt(0) === '@') {
                  return '{{@' + name.substring(1, name.length) + '}}';
                }

                if(intoList) {
                  return '{{' + name + '}}';
                } else {
                  return '{{' + ctrlName + '.' + name + '}}';
                }
              }

              if(name === '.') {
                return match;
              }
            });

            output.push({
              oldtext : text,
              newtext : newtext
            });
          }
        }
      });

      deferred.resolve({
        c : controllers, 
        o : output
      });

      return deferred.promise;
    })().then(function(html, obj) {
      var ctrls = {};
      for(var ctrlName in obj.c) {
        var scopeVars = obj.c[ctrlName].vars;
        var ctrlScope = scope(scopeVars);

        controllersRepository[ctrlName].init(ctrlScope);
        ctrls[ctrlName] = controllersRepository[ctrlName];
      }

      if(callback) {
        callback.call(callback, ctrls, this.replace(html, obj.o), mainCrtl);
      }
    }.bind(this, html));
  };

  return new Compiler();
})(udare.components, udare.controllers, udare.utils, udare.scope, udare.filters, udare.q, udare.log);