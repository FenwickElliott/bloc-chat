(function() {
    function LandingCtrl(Room) {
        this.Room = Room;
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
