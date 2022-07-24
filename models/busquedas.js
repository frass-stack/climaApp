const axios = require('axios');


class Busquedas {
    
    historial = ['Madrid', 'Tegucigalpa', 'San José'];


    constructor(){
        //TODO: Leer db si existe
    }
    
    get paramsWeather(){
        return {
            'appid': '9aa2923471ed2d07bb6f2ad923ebfbd8',
            'units': 'metric',
            'lang': 'es'
        }
    }

    async ciudad(lugar = '') {
        try {
            //peticion http
            const instance = axios.create({
                baseURL : `https://us1.locationiq.com/v1/search?key=pk.ae50f0a6ba28ed2d0ceeb5792d27f9bb&q=${lugar}&limit=5&accept-language=es&format=json`,
                // params: this.paramsMapBox()
            })
            const response = await instance.get();
            // console.log(response.data);
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

    async climaPorLugar(latitud, longitud){
        try {
            const instance = axios.create({
                baseURL : `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=9aa2923471ed2d07bb6f2ad923ebfbd8&units=metric&lang=es`,
                params: { ...this.paramsWeather, latitud, longitud}
            })

            const response = await instance.get();
            console.log(response);
            //Destructuring de los dos objetos de la data.
            const { weather, main } = response.data;

            return {
                descripcion: weather[0].description,
                temperatura: main.temp,
                minima: main.temp_min,
                maxima: main.temp_max
            }

        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;