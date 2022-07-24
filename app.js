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
                //Mostrar mensaje para que el usuario escriba el termino/lugar
                const termino = await leerInput('Ciudad: ');
                
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                // console.log(lugares);

                //Seleccionar el lugar
                const id = await listadoLugares(lugares);
                //console.log({id});
                const seleccion = lugares.find(lugar => id === lugar.id);

                //Datos del clima de la ciudad

                //Mostrar resultados
                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad: ' + seleccion.nombre)
                console.log('Latitud: ' + seleccion.latitud)
                console.log('Longitud: ' + seleccion.longitud)
                console.log('Temperatura: ')
                console.log('Temp. Minima: ')
                console.log('Temp. Maxima: ')
                break;
            case 2:
                console.log({opcion});
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