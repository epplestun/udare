udare.stateProvider = (function(q, request, compiler, executor, log, undefined) {
  log.info('udate.stateProvider');

  var isAbstractState = function(state) {
    return "abstract" in state;
  };

  var mergeViewsAndAbstractStates = function(views, states) {
    var merge = views || {};

    for(var index in states) {
      var state = states[index];

      if(state) {
        merge[index] = {
          template : state.template,
          controller : 'controller' in state ? state.controller : null
        };
      }
    }

    return merge;
  };

  var resolveView = function(id, response, controller) {
    (function() {
      var deferred = q.defer();

      compiler.compile(response, controller, function(d, controllers, html, mainCrtl) {
        d.resolve({
          c: controllers, 
          h : html,
          m : mainCrtl
        });
      }.bind(this, deferred));

      return deferred.promise;
    })().then(function(obj) {      
      var executorInstance = new executor();
      executorInstance.setHTML(obj.h);
      executorInstance.setControllers(obj.c);
      executorInstance.setContainer(document.querySelector('[data-view=' + id + ']'));
      executorInstance.execute(obj.m); 

      deferred.resolve('') ;
    });
  };

  var getStateViews = function(id, element, template, stateViews) {
    var deferred = q.defer();

    request.get(template).then(function(response) {
      element.innerHTML = response;

      var views = Array.prototype.slice.call(element.querySelectorAll('[data-view]')).map(function(view) {
        return {
          id : view.getAttribute('data-view'),
          element : view
        };
      });

      if(views.length > 0) {
        for(var index in views) {
          var view = views[index];

          if(stateViews[view.id]) {
            getStateViews(view.id, view.element, stateViews[view.id].template, stateViews);
          }
        }
      } else {
        resolveView(id, response, stateViews[id].controller);

        deferred.resolve('');
      }
    });

    return deferred.promise;
  };

  var StateProvider = function() {
    this.states = [];
    this.abstractStates = [];
    this.mainView = null;

    window.onhashchange = function() {
      this.change();
    }.bind(this);
  };
  StateProvider.prototype.state = function(name, state) {
    if(!this.state[name]) {
      if(isAbstractState(state)) {
        this.abstractStates[name] = state;
      } else {
        this.states[name] = state;
      }
    }

    return this;
  };
  StateProvider.prototype.change = function() {
    var requestPromises = [];

    var view = Array.prototype.slice.call(document.querySelectorAll('[data-view=main]')).map(function(view) {
      return {
        id : view.getAttribute('data-view'),
        element : view
      };
    })[0];

    if(!this.mainView) {
      this.mainView = view;
    }

    var url = document.location.hash.slice(1);
    for(var index in this.states) {
      if(this.states[index].url === url) { // regexp
        var state = this.states[index];

        var layout = this.abstractStates[state.layout] ? this.abstractStates[state.layout] : false;

        if(layout) {
          var stateViews = mergeViewsAndAbstractStates(state.views, this.abstractStates);
          getStateViews(this.mainView.id, this.mainView.element, layout.template, stateViews);
        } else {
          getStateViews(this.mainView.id, this.mainView.element, state.template, stateViews);
        }
      }
    }

    if(requestPromises.length > 0) {
      q.all(requestPromises).then(function() {
      });
    }
  };
  StateProvider.prototype.goTo = function(name) {
    document.location = '#' + this.states[name].url;
  };

  return new StateProvider();
})(udare.q, udare.request, udare.compiler, udare.executor, udare.log);