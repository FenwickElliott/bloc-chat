(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var reff = ref.child('-Kc4NAYeTuW4XXzMl59A')
        var messages = $firebaseArray(reff);
        var Message = {};
        Message.messages = messages;

        Message.up = $firebaseArray(ref.child("-Kc4BrRJyw9FAg6Jrchw"))

        Message.addUp = function(){
            newMessage = prompt("Message Content:");
            Message.up.$add({
                username: "Charles",
                content: newMessage,
                sentAt: "<TIME MESSAGE WAS SENT HERE>",
                roomId: "<ROOM UID HERE>"
            });
        }
        // Message.reff = reff;

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
