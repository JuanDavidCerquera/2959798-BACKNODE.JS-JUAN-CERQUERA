// function primero() {
//     console.log('primero');
// }
// function segundo() {
//     console.log('segundo');
// }
// primero();
// segundo();
// *****************************************

// function primero() {
//     setTimeout(function () {
//         console.log('primero');
//     }, 3000);
// }
// function segundo() {
//     console.log('segundo');
// }
// primero();
// segundo();

// // *************************************************
/*
function primero(callback) {

    console.log('primero');
    callback();

}
function segundo() {
    console.log('segundo');

}
primero(segundo);
*/



function tomarDatos(tipoDocumento, documento, callback) {
    const tipoDocumentoTransformado = tipoDocumento.toUpperCase();
    callback(tipoDocumentoTransformado, documento);
}

function generarCodigo(tipoDocumento, documento) {
    const ultimosCuatroNumeros = documento.slice(-4);
    const codigo = `${tipoDocumento}-${ultimosCuatroNumeros}`;
    console.log(codigo);
}


tomarDatos("cc", '1084922499', generarCodigo);
// const list = ["A", "B", "C"];
// function action(element, index) {
//     console.log("i=", index, "list=", element);
// }
// list.forEach(action);
// function generarError(callback) {
//     throw new Error("Este es un mensaje de error generado por la función.");
// }


