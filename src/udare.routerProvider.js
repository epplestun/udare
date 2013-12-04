udare.routerProvider = (function(q, request, compiler, executor, log, undefined) {
  log.info('udare.routerProvider');

  var RouterProvider = function() {
    this.routes = [];

    window.onhashchange = function() {
      this.change();
    }.bind(this);
  };
  RouterProvider.prototype = {
    when : function(route, options) {
      this.routes.push({
        route : route,
        options : options
      });

      return this;
    },

    otherwise : function() {},

    change : function() {
      var path = document.location.hash.substring(1); // remove # char

      for(var i = 0, l = this.routes.length; i < l; i++) {
        var route = this.routes[i];
        var pattern = '^' + route.route + '$';

        var r = new RegExp(pattern);
        if(r.test(path) === true) {
          this.route(
            route.options.view.template, 
            route.options.view.id,
            route.options.controller
          );
        }
      }
    },

    route : function(template, container, controller) { 
      request.get(template)
        .then(function(response) {
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
            //executorInstance.setContainer(container);
            executorInstance.setContainer(document.getElementById(container));
            executorInstance.execute(obj.m);  
          });
        }, function(error) {
          console.log('Error!', error);
        });
    }
  };

  return new RouterProvider();
})(udare.q, udare.request, udare.compiler, udare.executor, udare.log);