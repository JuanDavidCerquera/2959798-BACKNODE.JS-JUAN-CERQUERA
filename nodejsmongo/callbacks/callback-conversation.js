function hola(callback) {
    console.log('Hola');
}

function adios(callback) {
    setTimeout(() => {
        console.log('adios');
        callback();
    }, 2000)

}

hola(adios(() => {
    console.log('finaliza conversación');
}));

