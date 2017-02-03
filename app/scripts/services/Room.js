(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var Room = {};
        Room.all = rooms;

        Room.add = function(){
            newName = prompt("New Chat Room Name?");
            rooms.$add(newName);
        }

        Room.remove = function(){
            if(confirm("Are you sure?")){
            rooms.$remove(rooms[rooms.length-1]);
            }
        }

        var reff = ref.child("down");
        var down = $firebaseArray(reff);

        console.log(reff);
        console.log(down);

        Room.down = down;



        return Room;
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
