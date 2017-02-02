(function(){
    function ModalCtrl(Room, $uibModal) {
        this.Room = Room;

        this.open = function(){
            $uibModal.open({
                templateUrl: '/templates/modal.html'
            });
        };

        this.message = "Modal scope functioning";


    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();
