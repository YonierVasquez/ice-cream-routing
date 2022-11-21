(function (angular) {

    angular.module('app', [
        'ngComponentRouter',
        'homeModule',
        'aboutAppModule',
        'aboutOpiModule',
        'navigationBarModule',
        'computersModule'])

        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .value('$routerRootComponent', 'appComponent')

        .component('appComponent', {
            template: '<ng-outlet></ng-outlet>',
            $routeConfig: [
                { path: '/', name: 'Home', component: 'homeComponent', useAsDefault: true },
                { path: '/about-app', name: 'AboutApp', component: 'aboutAppComponent' },
                { path: '/about-opi', name: 'AboutOpi', component: 'aboutOpiComponent' },
                { path: '/computers', name: 'Computers', component: 'computersComponent' },
            ]
        });

})(window.angular);