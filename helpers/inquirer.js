const inquirer = require('inquirer');
require('colors');


const inquirerMenu = async () => {
    
    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Que desea hacer?',
            choices: [
                {
                    value: 1,
                    name: `${'1'.green}. Buscar Ciudad`
                },
                {
                    value: 2,
                    name: `${'2'.green}. Historial`
                },
                {
                    value: 0,
                    name: `${'3'.green}. Salir`
                }
            ]
        }
    ]
    
    console.clear();
    console.log('==========================='.green);
    console.log('           ClimaApp   '.cyan);
    console.log('===========================\n'.green);

   const { opcion } = await inquirer.prompt(preguntas);

   return opcion;
}

const inquirerPausa = async () => {

    const pausa = {
        type: 'input',
        name: 'pausa',
        message: 'Presione Enter para continuar'
    }
    await inquirer.prompt(pausa);
}

const leerInput = async ( message ) => {

    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if(value.length === 0){
                return `Por favor ingrese un valor.`
            }
            return true;
        }
    }
    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async ( tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${1 + i}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${ tarea.descripcion }`
        }
    })

    choices.unshift({
        value:'0',
        name:'0. '.green + 'Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {

    const preguntas = [
        {
            type:'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(preguntas);
    return ok;
}

const mostrarMultipleSeleccion = async ( tareas = [] ) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${1 + i}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true:false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarMultipleSeleccion
}