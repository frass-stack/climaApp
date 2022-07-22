const { inquirerMenu, inquirerPausa } = require("./helpers/inquirer");



const main = async () => {
    let opcion;

    do {
        opcion = await inquirerMenu();
        console.log({opcion});

        // switch (opcion) {
        //     case 1:
        //         console.log({opcion});
        //         break;
        //     case 2:
        //         console.log({opcion});
        //         break;
        //     case 0:
        //         console.log({opcion});
        //         break;
        // }

        console.log('\n');
        await inquirerPausa();

    } while (opcion !== 0);
}

main();