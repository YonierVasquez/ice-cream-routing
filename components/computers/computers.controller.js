(function (angular) {

    angular.module('computersModule', ['computersService', 'ui.bootstrap'])

        .controller('computersController', ['$scope', 'computersService', '$uibModal', function ($scope, computersService, $uibModal) {
            $scope.computersList =[]
            computersService.getComputers(function(computers){
                $scope.computersList = computers;
            })

            $scope.openModalCreateComputer = function () {
                let modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalCreateComputerCtrl',
                    controllerAs: '$modalCtrl',
                    size: undefined,
                    resolve: {}
                });

                modalInstance.result.then(
                    function (newComputer) {
                        computersService.addComputer(newComputer)
                        
                    }
                );
            }

            $scope.openModalDeleteComputer = function(computerId) {
                console.log('computerId', computerId);
                // let modalInstance = $uibModal.open({
                //     animation: true,
                //     ariaLabelledBy: 'modal-title',
                //     ariaDescribedBy: 'modal-body',
                //     templateUrl: 'myModalDelete.html',
                //     controller: 'ModalDeleteComputerCtrl',
                //     controllerAs: '$modalCtrl',
                //     size: undefined,
                //     resolve: {}
                // });

                // modalInstance.result.then(
                //     function () {
                //         computersService.deleteComputer(computerId).then(function (valido) {
                //             if (valido) {
                //                 $scope.computersList = $scope.computersList.filter(function(computer) {
                //                     return computer.id !== computerId
                //                 })
                //             }
                //         })
                //     },
                //     function () {}
                // );
            }
        }])

        .controller('ModalCreateComputerCtrl', function ($uibModalInstance) {
            var $modalCtrl = this;
            $modalCtrl.marca = ''
            $modalCtrl.modelo = ''
            $modalCtrl.yearLanzamiento = ''
            $modalCtrl.color = ''
            $modalCtrl.capacidadDefectoRam = ''
            $modalCtrl.capacidadMaximaRam = ''
            $modalCtrl.procesador = ''
            $modalCtrl.tipoDisco = 'SSD'
            $modalCtrl.capacidadDisco = ''
            $modalCtrl.tipoComputador = 'Portatil'

            $modalCtrl.ok = function () {
                $uibModalInstance.close({
                    marca: $modalCtrl.marca,
                    modelo: $modalCtrl.modelo,
                    yearLanzamiento: $modalCtrl.yearLanzamiento,
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

        .controller('ModalDeleteComputerCtrl', function ($uibModalInstance) {
            var $modalCtrl = this;

            $modalCtrl.ok = function () {
                $uibModalInstance.close();
            }

            $modalCtrl.cancel = function () {
                $uibModalInstance.dismiss();
            }
        })

        .component('computersComponent', {
            templateUrl: 'components/computers/computers.view.html',
        })

})(window.angular)