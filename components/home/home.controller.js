(function (angular) {

    angular.module('homeModule', ['iceCreamService', 'ui.bootstrap'])

        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .component("homeComponent", {
            templateUrl: 'components/home/home.view.html',
        })

        .controller("homeController", ['$scope', 'iceCreamService', '$uibModal', function ($scope, iceCreamService, $uibModal) {
            $scope.iceCreamsList = iceCreamService.getIceCreams()

            // Forma 1: obtener directamente la lista
            $scope.updateTable = function () {
                $scope.iceCreamsList = iceCreamService.getIceCreams()
            }

            // Forma 2: obtener una promesa
            $scope.updateTableWayPromise = function () {
                iceCreamService.getIceCreamsAsPromise().then(function (iceCreams) {
                    $scope.iceCreamsList = iceCreams
                })
            }

            // Forma 3: usar un callback
            $scope.updateTableWayCallback = function () {
                iceCreamService.getIceCreamsAsCallback(function (iceCreams) {
                    $scope.iceCreamsList = iceCreams
                })
            }

            // DATOS PARA EL MODAL DE BOOTSTRAP
            $scope.open = function () {
                let modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: '$modalCtrl',
                    size: undefined,
                    resolve: {
                        // Datos para inyectarle al modal
                        year: function () {
                            return '2022';
                        }
                    }
                });

                modalInstance.result.then(
                    // Operar con lo que envia el modal cuando se da el OK
                    function (brand) {
                        console.log(brand);
                    },
                    // Operar con lo que envia el modal cuando se da el CANCEL
                    function (msgCancel) {
                        console.log(msgCancel);
                    });
            }
        }])

        .controller('ModalInstanceCtrl', function ($uibModalInstance, year) {
            var $modalCtrl = this;
            $modalCtrl.brand = 'Lenovo'
            $modalCtrl.year = year
            $modalCtrl.color = 'red'

            $modalCtrl.ok = function () {
                $uibModalInstance.close($modalCtrl.brand);
            };

            $modalCtrl.cancel = function () {
                $uibModalInstance.dismiss('Cancelado');
            };
        })

})(window.angular);