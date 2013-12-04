// one
      // /accounts/123/buildings/456
      restful.one('accounts', 1).get().then(function(data) {
        deferred.resolve(data);
      });

      // put
      restful.one('accounts', 123).put().then(function(data) {
        deferred.resolve(data);
      });

      // post
      restful.all('accounts').post({
        name : "epplestun's account"
      }).then(function(data) {
        deferred.resolve(data);
      });

      // remove
      restful.one('accounts', 123).remove().then(function(data) {
        deferred.resolve(data);
      });

      /*
      // head
      restful.one('accounts', 123).head().then(function(data) {
        deferred.resolve(data);
      });

      // trace
      restful.one('accounts', 123).trace().then(function(data) {
        deferred.resolve(data);
      });

      // options
      restful.one('accounts', 123).options().then(function(data) {
        deferred.resolve(data);
      });

      // patch
      restful.one('accounts', 123).patch().then(function(data) {
        deferred.resolve(data);
      });
      */