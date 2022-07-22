const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`
            },
            {
                value: '2',
                name: `${'2'.green}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.green}. Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5'.green}. Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.green}. Salir`
            }
        ]
    }
]



const inquirerMenu = async () => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opcion   '.green);
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