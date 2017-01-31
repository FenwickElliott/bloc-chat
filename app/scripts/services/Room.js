(function() {
    function Room($rootScope, $firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        $rootScope.rooms = rooms;
        // this.rooms = rooms;

        return {
            all: rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$rootScope', '$firebaseArray', Room]);
})();
