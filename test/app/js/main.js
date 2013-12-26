require.config({
  urlArgs: "bust=" + (+new Date()),

  paths : {
    "udare" : "../lib/udare/udare",
    "socketio" : '../lib/socket.io-client/dist/socket.io'
  },

  shim : {
    udare : {
      exports: 'udare'
    },
    socketio : {
      exports: 'io'
    }
  }
});

require([
  'udare',
  'app'
], function(udare, app) {
  udare.bootstrap(document, [app]);
});