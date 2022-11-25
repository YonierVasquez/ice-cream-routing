(function (angular) {

    angular.module('computersModule', ['mappingService','computersService', 'ui.bootstrap'])

        .controller('computersController', ['$scope','mappingService','computersService','$uibModal', function ($scope,mappingService,computersService, $uibModal) {
            $scope.computersList =[]
            let getComputers = function(){
                computersService.getComputers(function(computers){
                    $scope.computersList = mappingService.mapComputer(computers);
                })
            }
            getComputers()         
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
                            getComputers()
                            console.log("Computador que llega ",computerSaved);
                        })
                    },
                    function(){

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
                    function (computerUP) {
                       
                        computersService.updateComputer(computerUP, function(computerSavedInBackend) {
                                if(computerSavedInBackend){ //VERIFICO QUE SE HAYA GUARDADO 
                                    getComputers()
                                }
                                
                        })
                    },
                    function () { }
                );
            }

            $scope.openModalDeleteComputer = function (computerId) {
                console.log("ID que envia el cards ",computerId)
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
            let TiposDisco = {"SSD":1,"HDD":2}
            let TiposComputador = {"Portátil":1,"Escritorio":2}

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
                    Brand: $modalCtrl.marca,
                    Modelo: $modalCtrl.modelo,
                    RealeseYear: $modalCtrl.yearLanzamiento,
                    Color: $modalCtrl.color,
                    DefaultCapacity: $modalCtrl.capacidadDefectoRam,
                    MaxCapacity: $modalCtrl.capacidadMaximaRam,
                    Processor: $modalCtrl.procesador,
                    TypeDisc: TiposDisco[$modalCtrl.tipoDisco],
                    DiscCapacity: $modalCtrl.capacidadDisco,
                    TypeComputer: TiposComputador[$modalCtrl.tipoComputador]
                });
            };

            $modalCtrl.cancel = function () {
                $uibModalInstance.dismiss();
            };
        })

        .controller('ModalEditComputerCtrl', function ($uibModalInstance, computerToEdit) {
            var $modalCtrl = this;
            $modalCtrl.tituloModal = 'Editar Computador'
            let TiposDisco = {"SSD":1,"HDD":2}
            let TiposComputador = {"Portátil":1,"Escritorio":2}
            // Datos computador
            $modalCtrl.id = computerToEdit.id
            $modalCtrl.marca = computerToEdit.marca
            $modalCtrl.modelo = computerToEdit.modelo
            $modalCtrl.yearLanzamiento = Number(computerToEdit.yearLanzamiento)
            $modalCtrl.color = computerToEdit.color
            $modalCtrl.capacidadDefectoRam = Number(computerToEdit.capacidadDefectoRam)
            $modalCtrl.capacidadMaximaRam = Number(computerToEdit.capacidadMaximaRam)
            $modalCtrl.procesador = computerToEdit.procesador
            $modalCtrl.tipoDisco =computerToEdit.tipoDisco
            $modalCtrl.capacidadDisco = Number(computerToEdit.capacidadDisco)
            $modalCtrl.tipoComputador =computerToEdit.tipoComputador

            $modalCtrl.ok = function () {
                $uibModalInstance.close({
                    //asignar las listas
                    Id:$modalCtrl.id,
                    Brand: $modalCtrl.marca,
                    Modelo: $modalCtrl.modelo,
                    RealeseYear: $modalCtrl.yearLanzamiento,
                    Color: $modalCtrl.color,
                    DefaultCapacity: $modalCtrl.capacidadDefectoRam,
                    MaxCapacity: $modalCtrl.capacidadMaximaRam,
                    Processor: $modalCtrl.procesador,
                    TypeDisc: TiposDisco[$modalCtrl.tipoDisco],
                    DiscCapacity: $modalCtrl.capacidadDisco,
                    TypeComputer: TiposComputador[$modalCtrl.tipoComputador]
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