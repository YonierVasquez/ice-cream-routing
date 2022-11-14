import iceCreamList from '../data/ice-creams.json' assert {type: 'json'};

/**
 * Retorna la lista de helados en desorden.
 * @returns 
 */
function disorderIceCreams() {
    return iceCreamList.sort(() => Math.random() - 0.5);
}

(function (angular) {

    angular.module("iceCreamService", [])

        .factory("iceCreamService", function () {
            return {
                getIceCreams: function () {
                    return disorderIceCreams();
                },
                getIceCreamsAsPromise: function () {
                    return Promise.resolve(disorderIceCreams());
                },
                getIceCreamsAsCallback: function (callback) {
                    callback(disorderIceCreams());
                }
            }
        })

})(window.angular);