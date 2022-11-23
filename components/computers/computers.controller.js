(function (angular) {

    angular.module('computersModule', ['computersService', 'ui.bootstrap'])

        .controller('computersController', ['$scope', 'computersService', '$uibModal', function ($scope, computersService, $uibModal) {
            $scope.computersList = []
            computersService.getComputers().then(function (computers) {
                $scope.computersList = computers
            })

            // Abrir modal
            $scope.open = function () {
                let modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: '$modalCtrl',
                    size: undefined,
                    resolve: {}
                });

                modalInstance.result.then(
                    function (brand) {
                        console.log(brand);
                    },
                    function () {}
                );
            }
        }])

        .controller('ModalInstanceCtrl', function ($uibModalInstance) {
            var $modalCtrl = this;
            $modalCtrl.marca = ''
            $modalCtrl.modelo = ''
            $modalCtrl.year = ''
            $modalCtrl.color = ''
            $modalCtrl.capacidadDefectoRam = ''
            $modalCtrl.capacidadMaximaRam = ''
            $modalCtrl.procesador = ''
            $modalCtrl.tipoDisco = ''
            $modalCtrl.capacidadDisco = ''
            $modalCtrl.tipoComputador = ''

            $modalCtrl.ok = function () {
                $uibModalInstance.close({
                    marca: $modalCtrl.marca,
                    modelo: $modalCtrl.modelo,
                    year: $modalCtrl.year,
                    color: $modalCtrl.color,
                    capacidadDefectoRam: $modalCtrl.capacidadDefectoRam,
                    capacidadMaximaRam: $modalCtrl.capacidadMaximaRam,
                    procesador: $modalCtrl.procesador,
                    tipoDisco: $modalCtrl.tipoDisco,
                    capacidadDisco: $modalCtrl.capacidadDisco,
                    tipoComputador: $modalCtrl.tipoComputador
                });
            };

            $modalCtrl.cancel = function () {
                $uibModalInstance.dismiss();
            };
        })

        .component('computersComponent', {
            templateUrl: 'components/computers/computers.view.html',
        })

})(window.angular)