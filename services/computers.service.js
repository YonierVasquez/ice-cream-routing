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

    angular.module("computersService", [])

        .factory("computersService", ["$http", function ($http) {
            return {
                getComputers: function (callbackWhenComputersAreBrought) {
                    $http({
                        method: 'GET',
                        url: 'https://localhost:44329/Computers',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                        }
                    }).then(function(response){
                        callbackWhenComputersAreBrought(response.data)
                    }) // aplicar map para soportar compatibilidad por nombre de propiedades diferentes entre frontend y backend
                },

                addComputer: function (computerToAdd, callbackWhenIsSavedInBackend) {
                    console.log("Objeto a enviar ",computerToAdd)
                    console.log("JSON",JSON.stringify(computerToAdd))
                    $http.post('https://localhost:44329/Computers/create',JSON.stringify(computerToAdd)).then(function(respose){
                        callbackWhenIsSavedInBackend(respose.data)
                    }) // ¿que retorna esta solicitud? (aplicar map si es necesario)
                },

                updateComputer: function(computerUpdate, callbackWhenIsUpdateInBackend) {
                    console.log("ENVIADO A PUT ",computerUpdate)
                    $http.put('https://localhost:44329/Computers/update',JSON.stringify(computerUpdate)).then(function(response){
                        callbackWhenIsUpdateInBackend(response.data)
                    })
                },

                deleteComputer: function (computerId, callbackWhenIsDeletedInBackend) {
                    console.log("CARD ID ",computerId)
                        $http.delete(`https://localhost:44329/Computers/delete?Id=${computerId}`,
                        {
                            'Access-Control-Allow-Origin': '*',
                        }
                        ).then(function(response){
                        callbackWhenIsDeletedInBackend(response.data)
                    })
                }
            }
        }])

})(window.angular)