require.config({
  urlArgs: "bust=" + (+new Date()),

  paths : {
    "udare" : "../lib/udare/udare"
  },

  shim : {
    udare : {
      exports: 'udare'
    }
  }
});

require([
  'udare',
  'app'
], function(udare, app) {
  udare.bootstrap(document, [app]);
});