(function (angular) {
    angular.module('home-module', [])

        .component('homeComponent', {
            template: '<h1>Home</h1>',
            controller: homeController
        })

    function homeController() {
        console.log('Se cargó el componente home');
    }

})(window.angular);