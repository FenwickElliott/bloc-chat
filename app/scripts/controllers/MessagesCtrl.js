(function() {
    function MessagesCtrl(Room) {
        this.placeHolder = "Meerkats 4 Eva!!!";
    }



    angular
        .module('blocChat')
        .controller('MessagesCtrl', ['Room', MessagesCtrl]);
})();
