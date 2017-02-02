(function(){
    function ModalCtrl(Room, $uibModal) {
        this.Room = Room;
    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();
