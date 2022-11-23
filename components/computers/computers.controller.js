(function (angular) {

    angular.module('computersModule', ['computersService'])

        .controller('computersController', ['$scope', 'computersService', function ($scope, computersService) {
            computersService.getComputers().then(function (computers) {
                $scope.computersList = computers
            })
        }])

        .component('computersComponent', {
            templateUrl: 'components/computers/computers.view.html',
        })

})(window.angular)