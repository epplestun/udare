udare.component = (function(components, injector, utils, log, H, undefined) {
  log.info('udare.component');

  if(!utils.components) {
    utils.components = {};
  }

  var Component = function(name, component) {
    this.name = name;
    this.component = component;
  };
  Component.prototype.compose = function(ctrlName, scope, tag, attrs, composeBy) {
    var component = this.component.apply(this.component);

    var replace = function(component, tag) {
      var matches = [];
      htmlParser(component.template, {
        start : function(tag, attrs, unary) {
          for(var i = 0, l = attrs.length; i < l; i++) {
            var attr = attrs[i];
            if(attr.name.substring(0, 4) === 'data') {
              matches.push({
                oldtext : attr.name + '="' + attr.value + '"',
                newtext : attr.name + '="' + ctrlName + '.' + attr.value + '"'
              });
            }
          }
        }
      });

      var outputTemplate = component.template;
      for(var i = 0, l = matches.length; i < l; i++) {
        var match = matches[i];
        outputTemplate = outputTemplate.replace(match.oldtext, match.newtext);
      }

      var template = H.compile(outputTemplate);
      var output = template(scope);

      var wrapper = document.createElement('div');
      wrapper.innerHTML = output;

      if(component.replace === true) {
        var copy = wrapper.firstChild;
        tag.parentNode.replaceChild(wrapper.firstChild, tag);

        return copy;
      }

      return tag;
    };  

    var _attrs = {};
    for(var index in attrs) {
      var attr = attrs[index];
      _attrs[attr.name] = attr.value;
    }

    if(composeBy === 'E' && component.restrict.indexOf('E') > -1) {
      component.link.apply(component.link, [scope, replace(component, tag), _attrs]);
    }

    if(composeBy === 'A' && component.restrict.indexOf('A') > -1) {
      component.link.apply(component.link, [scope, replace(component, tag), _attrs]);
    }

    if(composeBy === 'C' && component.restrict.indexOf('C') > -1) {
      component.link.apply(component.link, [scope, replace(component, tag), _attrs]);
    }
  };

  utils.components.isElementComponent = function(name) {
    return components[name] ? name : false;
  };

  utils.components.isAttributeComponent = function(attrs) {
    for( var index in attrs) {
      var attrName = attrs[index].name;
      if(components[attrName]) {
        return attrName;
      }
    }

    return false;
  };

  utils.components.isClassComponent = function(attrs) {
    for( var index in attrs) {
      var attrName = attrs[index].name;
      if(attrName === 'class') {
        var classNames = attrs[index].value.split(' ');

        for(var classIndex in classNames) {
          var className = classNames[classIndex];
          if(components[className]) {
            return className;
          }
        }
      }
    }

    return false;
  };

  return function(name, component) {
    return components[name] = new Component(name, component);
  };  
})(udare.components, udare.injector, udare.utils, udare.log, Handlebars);