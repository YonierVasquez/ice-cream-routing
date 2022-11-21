(function (angular) {

    angular.module('homeModule', ['iceCreamService'])

        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .controller("homeController", ['$scope', 'iceCreamService', function ($scope, iceCreamService) {
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

            /**
             * PRUEBA: reactividad de multiples variables
             */
            // $scope.var1 = true
            // $scope.var2 = true

            // // Cambiar el valor de las dos variables en el tiempo
            // window.setInterval(function () {
            //     $scope.var1 = !$scope.var1
            //     $scope.$apply()
            // }, 1000);
            // window.setInterval(function () {
            //     $scope.var2 = !$scope.var2
            //     $scope.$apply()
            // }, 500);

            // $scope.textoHabilitado = true

            // // Escuchar cambios en las variables
            // $scope.$watchGroup(['var1', 'var2'], function (newValues, oldValues, scope) {
            //     scope.mostrarTexto = newValues[0] && newValues[1]
            // })

            // var vm = this;

            //vm is observable as it is assigned
            // $scope.$watch(function (scope) { return vm.text; },
        }])

        .component("homeComponent", {
            templateUrl: 'components/home/home.view.html',
        })

})(window.angular);