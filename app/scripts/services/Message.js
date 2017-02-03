(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var reff = ref.child("-Kc4BrRJyw9FAg6Jrchw");
        var messages = $firebaseArray(reff);
        var Message = {};
        Message.all = messages;

        Message.up = $firebaseArray(ref.child("-Kc4BrRJyw9FAg6Jrchw"))

        Message.addUp = function(){
            newName = prompt("Message Content:");
            Message.up.$add(newName);
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
