(function() {
    function Message($firebaseArray) {
        var Message = {};
        Message.roomId = "-Kc4R2HAwmJi-RjejSDr";

        Message.setRoom = function(){
            var ref = firebase.database().ref().child("messages");
            var filtered = ref.orderByChild("roomId").equalTo(Message.roomId)
            Message.messages = $firebaseArray(filtered);
        }
        Message.setRoom();

        Message.changeRoom = function(newRoomId){
            Message.roomId = newRoomId;
            Message.setRoom();
        }

        Message.add = function(){
            newMessage = prompt("Message Content:");
            Message.messages.$add({
                username: "Charles",
                content: newMessage,
                roomId: Message.roomId
            });
        }

        Message.clear = function(){
            if(confirm("Are you sure?")){
                Message.messages.$remove(Message.messages[Message.messages.length-1]);
            }
        }
        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
