const { inquirerMenu, inquirerPausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async () => {
    const busquedas = new Busquedas();
    let opcion;

    do {
        opcion = await inquirerMenu();
        console.log({opcion});

        switch (opcion) {
            case 1:
                //Mostrar mensaje para que el usuario escriba
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);

                //Buscar los lugares

                //Seleccionar el lugar

                //Datos del clima de la ciudad

                //Mostrar resultados
                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad: ')
                console.log('Latitud: ')
                console.log('Longitud: ')
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