(function (angular) {

    angular.module("home", ['iceCreamService'])

        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .controller("homeController", ['$scope', 'iceCreamService', function ($scope, iceCreamService) {
            $scope.iceCreamsList = iceCreamService.getIceCreams()
            $scope.updateTable = function () {
                $scope.iceCreamsList = iceCreamService.getIceCreams()
            }
        }])

        .component("homeComponent", {
            templateUrl: 'components/home/home.view.html',
        })

})(window.angular);