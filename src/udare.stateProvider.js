udare.state = (function(undefined) {
  var State = function() {
  };
  State.prototype.setState = function(state) {
    this.state = state;
  };
  State.prototype.getState = function() {
    return this.state;
  };
  State.prototype.setParams = function(params) {
    this.params = params;
  };
  State.prototype.getParams = function() {
    return this.params;
  };
  
  return new State();
})();

udare.stateProvider = (function(state, q, request, compiler, executor, log, router, undefined) {
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

  var getStateController = function(id, element, state) {
    var deferred = q.defer();

    request.get(state.template).then(function(response) {
      element.innerHTML = response;
      
      resolveView(id, response, state.controller);
      deferred.resolve('');
    });

    return deferred.promise;
  };

  var StateProvider = function() {
    this.states = [];
    this.abstractStates = [];
    this.mainView = null;
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
  StateProvider.prototype.change = function(currentState) {
    var params = {};
    
    if(arguments.length > 1) {
      keys = currentState.url.match(/:[a-zA-Z0-9\-]+/g).map(function(match) {
        return match.substring(1);
      });
      values = Array.prototype.slice.call(arguments, 1);

      for(var i = 0, l = values.length; i < l; i++) {
        params[keys[i]] = values[i];
      }
    }

    state.setState(currentState);
    state.setParams(params);

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

    var promise;
    var layout = this.abstractStates[currentState.layout] ? this.abstractStates[currentState.layout] : false;

    if(layout) {
      var stateViews = mergeViewsAndAbstractStates(currentState.views, this.abstractStates);
      promise = getStateViews(this.mainView.id, this.mainView.element, layout.template, stateViews);
    } else {
      promise = getStateController(this.mainView.id, this.mainView.element, currentState);      
    }
    requestPromises.push(request);

    if(requestPromises.length > 0) {
      q.all(requestPromises).then(function() {
      });
    }
  };
  StateProvider.prototype.init = function() {
    var defaultState = null;
    var routes = {};

    for(var name in this.states) {
      var state = this.states[name];

      if(state.url) {
        routes[state.url] = this.change.bind(this, state);
      }

      if(state.default) {
        defaultState = state;
      }
    }

    this.router = router(routes).configure({
      recurse: 'backward'
      /*after: function() {
        console.log('after');
      },
      notfound : function() {
        console.log('route not found');
      }*/
    }).init(defaultState ? defaultState.url : null);
  };

  StateProvider.prototype.goTo = function(name, params) {
    var state = this.states[name];

    if(state.url) {
      var url = state.url.replace(/:[a-zA-Z0-9\-]+/g, function(m) {
        return params[m.substring(1)];
      });

      document.location = '#' + url;
    }
  };

  return new StateProvider();
})(udare.state, udare.q, udare.request, udare.compiler, udare.executor, udare.log, Router);