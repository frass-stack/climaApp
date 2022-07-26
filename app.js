const { inquirerMenu, inquirerPausa, leerInput, listadoLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async () => {
    const busquedas = new Busquedas();
    let opcion;

    do {
        opcion = await inquirerMenu();
        console.log({opcion});

        switch (opcion) {
            case 1:
                //==Mostrar mensaje para que el usuario escriba el termino/lugar
                const termino = await leerInput('Ciudad: ');
                
                //==Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                // console.log(lugares);

                //==Seleccionar el lugar
                const id = await listadoLugares(lugares);
                if(id === '0') continue;
                //console.log({id});
                const seleccion = lugares.find(lugar => id === lugar.id);

                //==Guardar en DB
                busquedas.agregarHistorial(seleccion.nombre);

                //==Datos del clima de la ciudad
                const { nombre, latitud, longitud } = seleccion
                // console.log(latitud);
                // console.log(longitud);
                const clima = await busquedas.climaPorLugar(seleccion.latitud , seleccion.longitud)
                //console.log({clima});
                
                //==Mostrar resultados
                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad: ' + nombre)
                console.log('Latitud: ' + latitud)
                console.log('Longitud: ' + longitud)
                console.log('Temperatura: ' + clima.temperatura)
                console.log('Temp. Minima: ' + clima.minima)
                console.log('Temp. Maxima: ' + clima.maxima)
                break;
            case 2:
                busquedas.historial.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                })
                break;
            case 0:
                console.log({opcion});
                break;
        }

        console.log('\n');
        await inquirerPausa();

    } while (opcion !== 0);
}

main();