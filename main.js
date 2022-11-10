import { IceCreamService } from "./services/ice-cream.service.js";

// Obtener los helados
const iceCreamService = new IceCreamService();


const iceCreamReportApp = angular.module("iceCreamReportApp", []);

iceCreamReportApp.controller("iceCreamReportController", function($scope) {
    const iceCreamsList = iceCreamService.getIceCreams();
    $scope.iceCreamsList = iceCreamsList;
    $scope.updateTable = function() {
        $scope.iceCreamsList = iceCreamService.getIceCreams();
    }
});