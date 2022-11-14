(function(angular) {

    angular.module('navigationBarModule', [])

    .component('navigationBarComponent', {
        templateUrl: 'components/navigation-bar/navigation-bar.view.html'
    })

    .controller('navigationBarController', function($scope) {
        $scope.city = 'Manizales'
    })

})(window.angular);