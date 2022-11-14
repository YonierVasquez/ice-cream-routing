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
        }])

        .component("homeComponent", {
            templateUrl: 'components/home/home.view.html',
        })

})(window.angular);