udare.request = (function(q, undefined) {
  q.stopUnhandledRejectionTracking();

  var Request = function() {
  };
  Request.prototype.init = function() {
    this.request.onload = function() {
      if (this.request.status === 200) {
        this.deferred.resolve(this.request.responseText);
      } else {
        this.deferred.reject(new Error("Status code was " + this.request.status));
      }
    }.bind(this);
    this.request.onerror = function() {
      this.deferred.reject(new Error("Can't XHR " + JSON.stringify(url)));
    }.bind(this);
    this.request.onprogress = function(event) {
      this.deferred.notify(event.loaded / event.total);
    }.bind(this);
    this.request.send();

    return this.deferred.promise;
  };
  Request.prototype.get = function(url, params) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("GET", url, true);
    return this.init();
  };
  Request.prototype.post = function(url, params) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("POST", url, true);
    return this.init();
  };
  Request.prototype.put = function(url, params) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("PUT", url, true);
    return this.init();
  };
  Request.prototype.delete = function(url, params) {
    this.request  = new XMLHttpRequest();
    this.deferred = q.defer();
    this.request.open("DELETE", url, true);
    return this.init();
  };

  return new Request();
})(Q);