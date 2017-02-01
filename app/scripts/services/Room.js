(function() {
    function Room($rootScope, $firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        $rootScope.rooms = rooms;
        // this.rooms = rooms;

        $rootScope.add = function(){
            newName = prompt("New Chat Room Name?");
            rooms.$add(newName);
        }

        $rootScope.remove = function(){
            if(confirm("Are you sure?")){
            rooms.$remove(rooms[0]);
            }
        }

        return {
            all: rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$rootScope', '$firebaseArray', Room]);
})();
