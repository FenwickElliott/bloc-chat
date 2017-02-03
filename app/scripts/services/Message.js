(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var reff = ref.child("down");
        var message = $firebaseArray(reff);
        var Message = {};
        Message.all = message;

        console.log(message);
        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
