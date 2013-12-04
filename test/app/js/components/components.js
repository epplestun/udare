define([
  'udare',
  'components/Test1Component',
  'components/Test2Component'
  ], function(udare, Test1Component, Test2Component) {

  var components = udare.module('components', []);
  components.component('test1component', Test1Component);
  components.component('test2component', Test2Component);

  return components;
});