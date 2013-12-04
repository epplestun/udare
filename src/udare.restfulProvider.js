udare.restfulProvider = (function(q, request, log, undefined) {
  log.info('udare.restfulProvider');

  var Restful = function() {
    this.baseUrl = null;
    this.requestInterceptor = null;
    this.errorInterceptor = null;
    
    this.uriRoutes = [];
    
    this.route = null;
    this.routeId = null;
    
    this.separator = '/';
  };
  Restful.prototype.reset = function() {
    this.uriRoutes = [];
    this.setBaseUrl(this.baseUrl);
  };
  Restful.prototype.setBaseUrl = function(baseUrl) {
    this.baseUrl = baseUrl;
    this.uriRoutes.unshift(baseUrl);

    return this;
  };
  Restful.prototype.setRequestInterceptor = function(requestInterceptor) {
    this.requestInterceptor = requestInterceptor;

    return this;
  };
  Restful.prototype.setErrorInterceptor = function(errorInterceptor) {
    this.errorInterceptor = errorInterceptor;

    return this;
  };
  Restful.prototype.all = function(route) {
    this.route = route;
    this.uriRoutes.push(route);

    return this;
  };
  Restful.prototype.one = function(route, id) {
    this.route = route;
    this.routeId = id;

    this.uriRoutes.push(route);
    this.uriRoutes.push(id);

    return this;
  };
  Restful.prototype.several = function(route) {};
  Restful.prototype.get = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.get(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.getList = function(/*id, queryParams, headers*/) {
    var id, queryParams, headers;
    var deferred = q.defer();

    if(arguments.length === 1 && typeof arguments[0] === 'string') {
      this.uriRoutes.push(arguments[0]);
    }

    if(arguments.length === 1 && typeof arguments[0] !== 'string') {
      queryParams = arguments[0];
    }

    if(arguments.length === 2 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string') {
      queryParams = arguments[0];
      headers = arguments[1];
    }

    if(arguments.length === 2 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string') {
      id = arguments[0];
      queryParams = arguments[1];      
    }

    var url = this.uriRoutes.join(this.separator);    

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers); 

    request.get(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.put = function(/*putData, queryParams, headers*/) {
    var putData, queryParams, headers;

    // putData
    if(arguments.length === 1 && typeof arguments[0] !== 'string') {
      putData = arguments[0];
    }

    // putData && queryParams
    if(arguments.length === 2 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string') {
      putData = arguments[0];
      queryParams = arguments[1];
    }

    // putData && queryParams && headers
    if(arguments.length === 3 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string'
      && typeof arguments[2] !== 'string') {
      putData = arguments[0];
      queryParams = arguments[1];
      headers = arguments[2];
    }

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);
    !!putData && (options.data = putData);

    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);
    
    request.put(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.post = function(/*route, postData, queryParams, headers*/) {
    var route, postData, queryParams, headers;

    // route
    if(arguments.length === 1 && typeof arguments[0] === 'string') {
      this.uriRoutes.push(arguments[0]);
    }

    // postDara
    if(arguments.length === 1 && typeof arguments[0] !== 'string') {
      postData = arguments[0];
    }

    // route && postData
    if(arguments.length === 2 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string') {
      this.uriRoutes.push(arguments[0]);
      postData = arguments[1];
    }

    // route && postData && queryParams
    if(arguments.length === 3 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string' 
      && typeof arguments[2] !== 'string') {
      this.uriRoutes.push(arguments[0]);
      postData = arguments[1];
      queryParams = arguments[2];
    }

    // route && postData && queryParams
    if(arguments.length === 3 && typeof arguments[0] !== 'string' 
      && typeof arguments[1] !== 'string' 
      && typeof arguments[2] !== 'string') {
      postData = arguments[0];
      queryParams = arguments[1];
      headers = arguments[2];
    }

    // route && postData && queryParams && headers
    if(arguments.length === 4 && typeof arguments[0] === 'string' 
      && typeof arguments[1] !== 'string' 
      && typeof arguments[2] !== 'string'
      && typeof arguments[3] !== 'string') {
      this.uriRoutes.push(arguments[0]);
      postData = arguments[1];
      queryParams = arguments[2];
      headers = arguments[2];
    }

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);
    !!postData && (options.data = postData);

    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);
    
    request.post(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.remove = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);
    
    request.delete(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.head = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.head(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.trace = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.trace(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.options = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.options(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  };
  Restful.prototype.patch = function(queryParams, headers) {
    var deferred = q.defer();

    var url = this.uriRoutes.join(this.separator);

    var options = {};
    !!queryParams && (options.params = queryParams);
    !!headers && (options.headers = headers);    
    
    request.patch(url, options).then(function(data) {
      if(this.requestInterceptor) {
        data = this.requestInterceptor.call(this.requestInterceptor, data);
      }

      deferred.resolve(JSON.parse(data));
    }.bind(this), function(error) {
      if(this.errorInterceptor) {
        data = this.errorInterceptor.call(this.requestInterceptor, data);
      }

      deferred.reject(error);
    }.bind(this));

    this.reset();

    return deferred.promise;
  }; 

  return new Restful();
})(udare.q, udare.request, udare.log);

udare.restful = udare.restfulProvider;