(function (angular) {

    // Datos de pruebas
    let computersList = [
        {
            "id": 1,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 2,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 3,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 4,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 5,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 6,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 7,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 8,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        },
        {
            "id": 9,
            "marca": "Lenovo",
            "modelo": "ThinkPad T480",
            "identification": "serial-1234abM",
            "yearLanzamiento": "2018",
            "color": "Azul metálico",
            "capacidadDefectoRam": 4,
            "capacidadMaximaRam": 32,
            "procesador": "Intel Core i7-8550U",
            "tipoDisco": "SSD",
            "capacidadDisco": 512,
            "tipoComputador": "Portátil"
        }
    ]

    angular.module("computersService", ['mappingService'])

        .factory("computersService", ["$http", 'mappingService', function ($http, mappingService) {
            return {
                getComputers: function (callbackWhenComputersAreBrought) {
                    $http({
                        method: 'GET',
                        url: 'https://localhost:44329/Computers',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                        }
                    }).then(callbackWhenComputersAreBrought(mappingService.mapComputer(computer))) // aplicar map para soportar compatibilidad por nombre de propiedades diferentes entre frontend y backend
                },

                addComputer: function (computerToAdd, callbackWhenIsSavedInBackend) {
                    $http({
                        method: 'POST',
                        url: 'https://localhost:44329/Computers/create',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        },
                        date: {
                            computer: computerToAdd
                        }
                    }).then(callbackWhenIsSavedInBackend(response)) // ¿que retorna esta solicitud? (aplicar map si es necesario)
                },

                updateComputer: function(computerUpdate, callbackWhenIsUpdateInBackend) {
                    $http({
                        method: 'PUT',
                        url: 'https://localhost:44329/Computers/update',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        },
                        date: {
                            computer: computerUpdate
                        }
                    }).then(callbackWhenIsUpdateInBackend(response)) // aplicar map
                },

                deleteComputer: function (computerId, callbackWhenIsDeletedInBackend) {
                    $http({
                        method: 'DELETE',
                        url: `https://localhost:44329/Computers/delete?id=${computerId}`,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                        },
                    }).then(callbackWhenIsDeletedInBackend(response))
                }
            }
        }])

})(window.angular)