(function(angular) {

    const links = [
        {
            name: 'Home',
            url: 'Home'
        },
        {
            name: 'About App',
            url: 'AboutApp'
        },
        {
            name: 'About Opi',
            url: 'AboutOpi'
        },
        {
            name: 'Nuestros equipos',
            url: 'Computers'
        }
    ]

    angular.module('navigationBarModule', [])

    .component('navigationBarComponent', {
        templateUrl: 'components/navigation-bar/navigation-bar.view.html'
    })

    .controller('navigationBarController', function($scope) {
        $scope.links = links;
    })

})(window.angular);