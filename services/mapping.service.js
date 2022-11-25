(function(angular) {

    angular.module('mappingService', [])

    .factory('mappingService', function() {
        return {
            mapComputer: function(computerToMap) {
                return computerToMap // CAMBIAR: se mapea el computador
            }
        }
    })

})(window.angular)