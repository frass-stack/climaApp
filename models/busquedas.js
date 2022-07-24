const axios = require('axios');


class Busquedas {
    
    historial = ['Madrid', 'Tegucigalpa', 'San José'];


    constructor(){
        //TODO: Leer db si existe
    }
    
    // get paramsMapBox(){
    //     return {
    //         'key':'pk.ae50f0a6ba28ed2d0ceeb5792d27f9bb',
    //         // 'limit':5,
    //         // 'accept-language':'es'
    //     }
    // }

    async ciudad(lugar = '') {
        try {
            //peticion http
            const instance = axios.create({
                baseURL : `https://us1.locationiq.com/v1/search?key=pk.ae50f0a6ba28ed2d0ceeb5792d27f9bb&q=${lugar}&limit=5&accept-language=es&format=json`,
                // params: this.paramsMapBox()

            })
            const response = await instance.get();
            //console.log(response.data);
            return response.data.map(lugar => (
                {
                    id : lugar.place_id,
                    nombre : lugar.display_name,
                    latitud : lugar.lat,
                    longitud : lugar.lon
                }
            ))

        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;