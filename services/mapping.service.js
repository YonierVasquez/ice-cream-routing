(function (angular) {

    angular.module('mappingService', [])

        .factory('mappingService', function () {
            return {
                mapComputer: function (computerToMap) {
                    let mapList = computerToMap.map(function (computer) {
                        let listaTiposD = ["SSD", "HDD"];
                        let listaTiposC = ["Portátil", "Escritorio"];
                        return {
                            "id":computer.Id,
                            "marca": computer.Brand,
                            "modelo": computer.Modelo,
                            "yearLanzamiento": computer.RealeseYear,
                            "color": computer.Color,
                            "capacidadDefectoRam": computer.DefaultCapacity,
                            "capacidadMaximaRam": computer.MaxCapacity,
                            "procesador": computer.Processor,
                            "tipoDisco": listaTiposD[computer.TypeDisc - 1],
                            "capacidadDisco": computer.DiscCapacity,
                            "tipoComputador": listaTiposC[computer.TypeComputer - 1]
                        }
                    })
                    return mapList // CAMBIAR: se mapea el computador
                }
            }
        })

})(window.angular)