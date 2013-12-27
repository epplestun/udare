define([
  'socketio'
  ], function(io) {

  function AccountsSocket() {
    var socket = io.connect('http://localhost:3000');

    return {
      onAccountsChange : function(callback) {
        socket.on('accounts-change', function (data) {
          callback.call(callback, data.accounts);
        });
      },

      accountChange : function() {
        socket.emit('account-change', { 
          my: 'data' 
        });
      }
    }
  }

  return AccountsSocket;
});