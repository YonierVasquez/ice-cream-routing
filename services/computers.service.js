(function(angular) {

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

        .factory("computersService", function () {
            return {
                getComputers: function () {
                    return Promise.resolve(computersList)
                },
                addComputer: function(computer) {
                    console.log('new computer', computer)
                    return Promise.resolve(true)
                },
                deleteComputer: function(computerId) {
                    console.log('delete computer', computerId)
                    return Promise.resolve(true)
                }
            }
        })

})(window.angular)