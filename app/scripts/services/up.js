(function() {
    function Room($rootScope, $firebaseArray) {
        var ref = firebase.database().ref().child("KbufP666CX3NpuTZkr5");
        var up = $firebaseArray(ref);
        $rootScope.up = up;
        // this.rooms = rooms;

        $rootScope.add = function(){
            newMessage = prompt("New Message:");
            up.$add(newMessage);
        }

        $rootScope.upAdd = function(){
            up.$add("Hello World");
        }

        // $rootScope.remove = function(){
        //     if(confirm("Are you sure?")){
        //     rooms.$remove(rooms[0]);
        //     }
        // }

        return {
            all: rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$rootScope', '$firebaseArray', Room]);
})();
