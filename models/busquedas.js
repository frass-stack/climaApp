const axios = require('axios');


class Busquedas {
    
    historial = ['Madrid', 'Tegucigalpa', 'San José'];


    constructor(){
        //TODO: Leer db si existe
    }

    async ciudad(lugar = '') {
        try {
            //peticion http
            const url = "https://us1.locationiq.com/v1/search?key=pk.ae50f0a6ba28ed2d0ceeb5792d27f9bb&q=Buenos%20Aires&limit=5&accept-language=es&format=json";
            const response = await axios.get(url);
            console.log(response.data);
            //return []; //retornar los lugares que coincidan con el lugar ingresado por el usuario.
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;