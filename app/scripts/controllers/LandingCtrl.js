(function() {
    function LandingCtrl(Room) {
        this.Room = Room;
        console.log(Room);
    }



    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
