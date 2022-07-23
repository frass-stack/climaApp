const axios = require('axios');


class Busquedas {
    
    historial = ['Madrid', 'Tegucigalpa', 'San José'];


    constructor(){
        //TODO: Leer db si existe
    }

    async ciudad(lugar = '') {
        try {
            //peticion http
            const response = await axios.get('https://reqres.in/api/users?page=2');
            console.log(response.data.data);
            //return []; //retornar los lugares que coincidan con el lugar ingresado por el usuario.
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;