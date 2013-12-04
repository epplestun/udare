udare.request = (function(q, log, undefined) {
  log.info('udare.request');

  q.stopUnhandledRejectionTracking();

  var Request = function() {
  };
  Request.prototype.init = function(options) {
    options = options || {};
    options.method  = options.method || 'GET';
    options.headers = options.headers || {};
    options.cache   = options.cache || false;
    options.async   = options.async && options.async === false ? false : true;
    options.timeout = options.timeout || 0;

    var deferred = q.defer();

    if(!options.url) {
      throw new Error("Url is needed");
    }

    var toQueryString = function(obj) {
      var parts = [];
      for (var i in obj) {
        if(obj.hasOwnProperty(i)) {
          parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
      }
      return parts.join("&");
    };

    var appendQuery = function(url, query) {
      if (query == '') return url;
      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    }

    if(options.params) {
      options.url = appendQuery(options.url, toQueryString(options.params));
    }

    if(options && options.data) {
      options.headers['Content-Type'] = (options.headers['Content-Type'] || 'application/x-www-form-urlencoded');
      var queryString = options.data ? toQueryString(options.data) : null;
      if(queryString) {
        options.headers["Content-length"] = queryString.length;
      }
    }

    if(options.cache) {
      options.url = appendQuery(options.url, '_=' + +new Date());
    }

    var request  = new XMLHttpRequest();
    request.open(options.method, options.url, options.async ? options.async : true);

    if(options && options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        request.setRequestHeader(key, options.headers[key]);
      });       
    }

    request.onload = function() {
      if(request.status === 200) {
        deferred.resolve(request.responseText);
      } else {
        deferred.reject(new Error("Status code was " + request.status));
      }
    };
    request.onerror = function() {
      deferred.reject(new Error("Can't XHR " + JSON.stringify(options.url)));
    };
    request.onprogress = function(event) {
      deferred.notify(event.loaded / event.total);
    };

    if(options.timeout > 0) {
      var timeout = setTimeout(function() {
        xhr.onreadystatechange = function() {};
        xhr.abort();
        clearTimeout(timeout);
      }, options.timeout);
    }

    request.send(options && options.data ? toQueryString(options.data) : null);

    return deferred.promise;
  };
  Request.prototype.get = function(url, options) {
    options = options || {};
    options.method = 'GET';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.post = function(url, options) {
    options = options || {};
    options.method = 'POST';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.put = function(url, options) {
    options = options || {};
    options.method = 'PUT';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.delete = function(url, options) {
    options = options || {};
    options.method = 'DELETE';
    options.url = url;    
    
    return this.init(options);
  };
  Request.prototype.head = function(url, options) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("HEAD", url, true);
    return this.init(options);
  };
  Request.prototype.trace = function(url, options) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("TRACE", url, true);
    return this.init(options);
  };
  Request.prototype.options = function(url, options) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("OPTIONS", url, true);
    return this.init(options);
  };
  Request.prototype.patch = function(url, options) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("PATCH", url, true);
    return this.init(options);
  };

  return new Request();
})(udare.q, udare.log);