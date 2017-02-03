(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var reff = ref.child("ref");
    var messages = $firebaseArray(reff);
    var Message = {};
    Message.all = messages;

    console.log("Messages: "+ messages);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
