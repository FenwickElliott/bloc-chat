(function() {
    function Room($rootScope, $firebaseArray) {
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref);
        $rootScope.rooms = rooms;
        console.log(rooms);
        return {
            all: rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$rootScope', '$firebaseArray', Room]);
})();
