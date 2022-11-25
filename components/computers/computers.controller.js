(function (angular) {

    angular.module('computersModule', ['computersService', 'ui.bootstrap'])

        .controller('computersController', ['$scope', 'computersService', '$uibModal', function ($scope, computersService, $uibModal) {
            $scope.computersList = []
            computersService.getComputers(function(computers) {
                $scope.computersList = computers
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
                        computersService.addComputer(newComputer, function(computerSaved) {
                            $scope.computersList.push(computerSaved)
                        })
                    }
                );
            }

            $scope.openModalEditComputer = function (computer) {
                let modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalEditComputerCtrl',
                    controllerAs: '$modalCtrl',
                    size: undefined,
                    resolve: {
                        computerToEdit: function () {
                            return computer
                        }
                    }
                });

                modalInstance.result.then(
                    function (computerUpdated) {
                        computersService.updateComputer(computerUpdatedToSave, function(computerSavedInBackend) {
                            let index = $scope.computersList.findIndex(c => c.id === computerUpdated.id)
                                $scope.computersList[index] = computerUpdated
                        })
                    },
                    function () { }
                );
            }

            $scope.openModalDeleteComputer = function (computerId) {
                let modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalDelete.html',
                    controller: 'ModalDeleteComputerCtrl',
                    controllerAs: '$modalCtrl',
                    size: undefined,
                    resolve: {}
                });

                modalInstance.result.then(
                    function () {
                        computersService.deleteComputer(computerId, function() {
                            $scope.computersList = $scope.computersList.filter(function (computer) {
                                return computer.id !== computerId
                            })
                        })
                    },
                    function () { }
                );
            }
        }])

        .controller('ModalCreateComputerCtrl', function ($uibModalInstance) {
            var $modalCtrl = this;
            $modalCtrl.tituloModal = 'Crear Computador'

            // Datos computador
            $modalCtrl.marca = ''
            $modalCtrl.modelo = ''
            $modalCtrl.yearLanzamiento = ''
            $modalCtrl.color = ''
            $modalCtrl.capacidadDefectoRam = ''
            $modalCtrl.capacidadMaximaRam = ''
            $modalCtrl.procesador = ''
            $modalCtrl.tipoDisco = 'SSD'
            $modalCtrl.capacidadDisco = ''
            $modalCtrl.tipoComputador = 'Portátil'

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

        .controller('ModalEditComputerCtrl', function ($uibModalInstance, computerToEdit) {
            var $modalCtrl = this;
            $modalCtrl.tituloModal = 'Editar Computador'

            // Datos computador
            $modalCtrl.marca = computerToEdit.marca
            $modalCtrl.modelo = computerToEdit.modelo
            $modalCtrl.yearLanzamiento = Number(computerToEdit.yearLanzamiento)
            $modalCtrl.color = computerToEdit.color
            $modalCtrl.capacidadDefectoRam = Number(computerToEdit.capacidadDefectoRam)
            $modalCtrl.capacidadMaximaRam = Number(computerToEdit.capacidadMaximaRam)
            $modalCtrl.procesador = computerToEdit.procesador
            $modalCtrl.tipoDisco = computerToEdit.tipoDisco
            $modalCtrl.capacidadDisco = Number(computerToEdit.capacidadDisco)
            $modalCtrl.tipoComputador = computerToEdit.tipoComputador

            $modalCtrl.ok = function () {
                $uibModalInstance.close({
                    id: computerToEdit.id,
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