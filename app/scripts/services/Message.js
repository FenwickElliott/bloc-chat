(function() {
    function Message($firebaseArray) {
        var Message = {};
        Message.roomId = "-Kc4NAYeTuW4XXzMl59A";

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.messages = messages;

        Message.add = function(){
            newMessage = prompt("Message Content:");
            Message.messages.$add({
                username: "Charles",
                content: newMessage,
                sentAt: "noon",
                roomId: Message.roomId
            });
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
