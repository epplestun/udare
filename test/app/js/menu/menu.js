define([
  'udare',
  'menu/MenuController'
  ], function(udare, MenuController) {
  
  var menu = udare.module('menu', []);
  menu.controller('MenuController', MenuController);

  return menu;
});