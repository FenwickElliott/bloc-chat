(function() {
    function LandingCtrl(Room) {
        this.placeHolder = "Meerkats 4 Eva!!!";
    }

    

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
