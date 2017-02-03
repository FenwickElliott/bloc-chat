(function() {
    function Message($firebaseArray) {
        var Message = {};
        Message.roomId = "-Kc4R7JHhhN92ENxEYnT";

        var ref = firebase.database().ref().child("messages");
        var filtered = ref.orderByChild("roomId").equalTo(Message.roomId)
        var messages = $firebaseArray(filtered);
        Message.messages = messages;



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
                messages.$remove(messages[messages.length-1]);
            }
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
