(function (angular) {

    angular.module('app', ['ngComponentRouter', 'home', 'aboutApp', 'aboutOpi'])

        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .value('$routerRootComponent', 'app')

        .component('app', {
            template: '<ng-outlet></ng-outlet>',
            $routeConfig: [
              { path: '/', name: 'Home', component: 'homeComponent', useAsDefault: true },
              { path: '/about-app', name: 'AboutApp', component: 'aboutOpiComponent' }
            ]
        });

})(window.angular);