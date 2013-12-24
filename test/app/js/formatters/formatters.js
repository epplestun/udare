define([
  'udare'
  ], function(udare) {
    
  var formatters = udare.module('formatters', []);
  formatters.formatter('phoneNumber', function(phoneNumber) {
    return "(" 
      + phoneNumber.substr(0, 3) 
      + ") " 
      + phoneNumber.substr(3, 3) 
      + "-" 
      + phoneNumber.substr(6, 4);
  });

  return formatters;
});