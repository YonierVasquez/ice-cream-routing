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
                getComputers: function () {
                    return $http({
                        method: 'GET',
                        url: 'https://localhost:44329/Computers',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                        }
                    })
                },
                addComputer: function (computer) {
                    console.log('new computer', computer)
                    return {
                        getComputers: function () {

                            return $http({
                                method: 'POST',
                                url: 'https://localhost:44329/Computers/create',
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                },
                                date: {
                                    computer: computer
                                }
                            }).then(function (valido) {
                                if (valido) {
                                    $scope.computersList.push(newComputer)
                                    console.log("Valida");
                                    console.log(valido);
                                    return valido;
                                }
                            }).then(function (valido){
                                console.log("no Valida");
                                console.log(valido)
                                console.log()
                            })
                        },

                    }
                },
                deleteComputer: function (computerId) {
                    console.log('delete computer', computerId)
                    return Promise.resolve(true)
                }
            }
        }])

})(window.angular)