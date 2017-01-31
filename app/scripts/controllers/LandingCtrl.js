(function() {
    function LandingCtrl(Room) {
        this.placeHolder = "Meerkats 4 Eva!!!";
        this.room = Room;

        console.log(this.room);
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
