/*
function verificarLongitudDocumento(documento) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof documento !== 'string') {
                reject(new Error("El documento debe ser una cadena de caracteres."));
            } else if (documento.length !== 10) {
                reject(new Error("La longitud del documento no es 10 caracteres."));
            } else {
                resolve("Documento verificado");
            }
        }, 2000);
    });
}


verificarLongitudDocumento(`1234567891`)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error("Se ha producido un error:", error.message);
    });
    */

// Un chat entre alumno y instructor va haber una pregunta para que evalue si la pregunta es falso o verdadero

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = (query) => new Promise(resolve => readline.question(query, resolve));

const notifier = require('node-notifier');

function respuestaAlumno(respuesta) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (parseInt(respuesta) === 4) {
                resolve("La respuesta es correcta.");
            } else {
                reject(new Error("La respuesta es incorrecta."));
            }
        }, 2000);
    });
}

function mostrarMensaje(mensaje) {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log(mensaje);
            resolve();
        }, 1000);
    });
}

async function conversacion() {
    await mostrarMensaje("Profesor: hola estudiante.");
    await mostrarMensaje("Estudiante: hola Profesor.");
    await mostrarMensaje("Profesor: ¿Cuánto es 2 + 2?");
    let respuesta = await input('Estudiante: ');

    try {
        const resultado = await respuestaAlumno(respuesta);
        // Mostrar alerta utilizando node-notifier
        notifier.notify({
            title: 'Profesor',
            message: resultado,
            sound: true
        });
    } catch (error) {
        console.error("Profesor:", error.message);
        // Mostrar alerta utilizando node-notifier
        notifier.notify({
            title: 'Profesor',
            message: error.message,
            sound: true
        });
    }

    readline.close();
}

conversacion();


