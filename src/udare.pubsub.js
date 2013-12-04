udare.pubsub = (function(log, undefined) {
  log.info('udare.pubsub');

  var PubSub = {};
  var cache = PubSub.c_ || {};
  
  PubSub.publish = function(topic, args) {
    var subs = cache[topic], len = subs ? subs.length : 0;

    while(len--) {
      subs[len].apply(PubSub, args || []);
    }
  };

  PubSub.subscribe = function(topic, callback) {
    if(!cache[topic]) {
      cache[topic] = [];
    }

    cache[topic].push(callback);

    return [topic, callback];
  };

  PubSub.unsubscribe = function(topic) {
    delete cache[topic];
  };

  return PubSub;
})(udare.log);