import iceCreamList from '../data/ice-creams.json' assert {type: 'json'};

(function (angular) {

    angular.module("iceCreamService", [])

        /**
         * Retorna una lista de helados en orden aleatorio
         */
        .factory("iceCreamService", function () {
            return {
                getIceCreams: function () {
                    return iceCreamList.sort(() => Math.random() - 0.5);
                }
            }
        })


})(window.angular);