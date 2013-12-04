define([
  'udare',
  'dashboard/controllers/DashboardController',
  'dashboard/controllers/Widget1Controller',
  'dashboard/controllers/Widget2Controller',
  ], function(udare, DashboardController, Widget1Controller, Widget2Controller) {
  
  var dashboard = udare.module('dashboard', []);
  dashboard.controller('DashboardController', DashboardController);
  dashboard.controller('Widget1Controller', Widget1Controller);
  dashboard.controller('Widget2Controller', Widget2Controller);

  return dashboard;
});