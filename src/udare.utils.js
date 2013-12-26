udare.utils = (function(log, undefined) {
  log.info('udare.utils');

  return {
    STRIP_COMMENTS : /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,

    ucfirst : function(str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    },

    camelCase : function(str) {
      return str.replace(/-+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    },

    getFuncName : function(func) {
      var fnStr  = func.toString().replace(this.STRIP_COMMENTS, '');
      var fnName = fnStr.match(/function\s+(.*)\(/m)[1];

      return fnName;
    },

    getParamNames : function(func) {
      var fnStr = func.toString().replace(this.STRIP_COMMENTS, '');
      var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\s,]+)/g);
      
      if(result === null)
        result = [];
      
      return result;
    },

    createUUID : function() {
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
    },

    replace : function(source, object, regexp) {
      return String(source).replace(regexp || (/\\?\{{([^{}]+)\}}/g), function(match, name) {
        return object[name] ? object[name] : match;
      });
    },

    scopeVarsFromSource : function(source) {
      var vars = source.match(/\\?\{{([^{}]+)\}}/g);
      var out = [];
      for(var i = 0, l = vars.length; i < l; i++) {
        var scopeVar = vars[i].replace('{{', '').replace('}}', '');
        out.push(scopeVar);
      }

      return out;
    }
  };
})(udare.log);