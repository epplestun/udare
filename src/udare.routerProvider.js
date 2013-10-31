udare.routerProvider = (function(request, controllers, view, undefined) {
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
          this.route(view(route.options.view), route.options.controller);
        }
      }
    },

    route : function(view, controller) {      
      request.get(view.getTemplate())
        .then(function(response) {
          view.setSource(response);          
          controllers[controller].init(view);
        }, function(error) {
          console.log('Error!', error);
        });
    }
  };

  return new RouterProvider();
})(udare.request, udare.controllers, udare.view);