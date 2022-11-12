import { IceCreamService } from "../../services/ice-cream.service.js";

(function (angular) {

    const iceCreamService = new IceCreamService()

    angular.module("home", [])

        .controller("homeController", function ($scope) {
            $scope.iceCreamsList = iceCreamService.getIceCreams()
            $scope.updateTable = function () {
                $scope.iceCreamsList = iceCreamService.getIceCreams()
            }
        })

        .component("homeComponent", {
            templateUrl: 'components/home/home.view.html'
        })

})(window.angular);