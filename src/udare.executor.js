udare.executor = (function(controllersRepository, componentsRepository, pubsub, events, dom, utils, q, log, H, undefined) {
  log.info('udare.executor');

  var Executor = function() {
    this.controllers = null;
    this.html = null;
    this.container = null;
  };
  Executor.prototype.setControllers = function(controllers) {
    this.controllers = controllers;
  };
  Executor.prototype.getControllers = function() {
    return this.controllers;
  };
  Executor.prototype.setHTML = function(html) {
    this.html = html;
  };
  Executor.prototype.getHTML = function() {
    return this.html;
  };
  Executor.prototype.setContainer = function(container) {
    this.container = container;
  };
  Executor.prototype.getContainer = function() {
    return this.container;
  };
  Executor.prototype.execute = function(mainCrtl) {
    
    var execute = function(changedScope) {
      var controllers = this.getControllers();

      for(var ctrlName in controllers) {
        var ctrl = controllers[ctrlName];

        if(changedScope && ctrl.scope && ctrl.scope.id === changedScope.id) {
          ctrl.scope = changedScope;
        }
      }

      var context = {};
      for(var ctrlName in controllers) {
        var ctrl = controllers[ctrlName];
        context[ctrlName] = ctrl.scope;
      }

      var template = H.compile(this.getHTML());
      var output = template(context);

      //var container = document.getElementById(this.getContainer()); // pasar el elemento DOM y no el ID
      var container = this.getContainer();

      var domInstance = dom(container)
        .saveFormElementsStates()
        .setHTML(output);//.setActiveElement();

      var ctrlIndex = 0;
      var tagCtrl = null;
      controllers = {};
      
      if(mainCrtl) {
        controllers[mainCrtl] = {};
      }

      var tagScopesMap = {};

      var index = 0;
      htmlParser(dom(container).getHTML(), {
        start: function(tag, attrs, unary) {
          var componentName;

          var controllerKeys = Object.keys(controllers);

          if(controllerKeys.length > 0) {
            var ctrlName = Object.keys(controllers)[ctrlIndex].split('.')[0];

            tagScopesMap[index + tag.toLowerCase()] = {
              name : ctrlName,
              scope : controllersRepository[ctrlName].scope
            };
            index++;
          
            for(var i = 0, l = attrs.length; i < l; i++) {
              var attr = attrs[i];

              if(attr.name === 'data-controller') {
                ctrlIndex++
                tagCtrl = tag;
                controllers[attr.value] = {}
              }
            }
          }
        },
        end: function(tag) {
          if(tagCtrl === tag) {
            --ctrlIndex;
          }
        }
      });

      var componentName;
      var tags = Array.prototype.slice.call(container.getElementsByTagName('*'));

      for(var index in tags) {
        var tag = tags[index];
        var attrs = tag.attributes ? Array.prototype.slice.call(tag.attributes) : [];
        attrs = attrs.map(function(attr) {
          return {
            name : attr.name,
            value : attr.value
          };
        });

        if(tag.tagName && (componentName = utils.components.isElementComponent(tag.tagName.toLowerCase()))) {
          var tagScope = tagScopesMap[index + tag.tagName.toLowerCase()];
          componentsRepository[componentName].compose(tagScope.name, tagScope.scope, tag, attrs, 'E');
        }

        if(attrs.length > 0 && (componentName = utils.components.isAttributeComponent(attrs))) {
          var tagScope = tagScopesMap[index + tag.tagName.toLowerCase()];
          componentsRepository[componentName].compose(tagScope.name, tagScope.scope, tag, attrs, 'A');
        }

        if(attrs.length > 0 && (componentName = utils.components.isClassComponent(attrs))) {
          var tagScope = tagScopesMap[index + tag.tagName.toLowerCase()];
          componentsRepository[componentName].compose(tagScope.name, tagScope.scope, tag, attrs, 'C');
        }
      }

      domInstance
        .loadFormElementsStates()
        .inputs(context) // TODO
        .setActiveElement();

      events(container).parse(context);
    };
    
    pubsub.unsubscribe('executor.execute');
    pubsub.subscribe('executor.execute', execute.bind(this));   
    pubsub.publish('executor.execute', []);
  };

  return Executor;
})(udare.controllers, udare.components, udare.pubsub, udare.events, udare.dom, udare.utils, udare.q, udare.log, Handlebars);