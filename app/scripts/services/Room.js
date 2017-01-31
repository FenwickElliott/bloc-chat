(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        console.log(ref);
        var rooms = $firebaseArray(ref);
        this.rooms = rooms;
        console.log(rooms);
        return {
            all: rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
