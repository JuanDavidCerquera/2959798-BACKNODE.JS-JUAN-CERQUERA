//callbakcs
// function action(nombre, callback) {
//     const saludo = "hola " + nombre
//     callback(saludo);
// }

// function saludar(saludo) {
//     console.log(saludo);

// }

// action("John", saludar);

//promise

// function action(mensaje) {
//     return new Promise((resolve, reject) => {
//         if (mensaje === "hola") {
//             resolve("mensaje bueno")
//         } else {
//             reject("mensaje malo")
//         }


//     })
// }
// action("hss")
//     .then(response => console.log(response))
//     .catch(response => console.log(response))


//async away manejo de errores


// function action(mensaje) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mensaje === "hola") {
//                 resolve("mensaje bueno")
//                 console.log();
//             } else {
//                 reject("mensaje malo")
//             }
//         }, 4000);
//     })


// }

// async function actionasync() {
//     try {
//         const response = await action("hola");
//         await console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// actionasync()



//callbacks anidado

// function decirsaludo(callback) {
//     console.log(callback);
// }

// function prepararsaludo(callback) {
//     const saludo = "hola " + callback
//     return saludo;

// }

// function sabernombre(nombre) {
//     return nombre
// }

// decirsaludo(prepararsaludo(sabernombre("juan")))


// PROMESA ENCADEDADA
function promesa2() {
    return new Promise((resolve) => {
        resolve("mundo")
    })
}
function promesas() {
    const holaMundo = true;
    return new Promise((resolve, reject) => {
        if (holaMundo === true) {
            resolve(promesa2())
            console.log("hola");
        } else {
            reject("error")
        }
    })
}

promesas()
    .then(response => console.log(response))
    .catch(response => console.log(response))


// function promesas() {
//     const holaMundo = false;
//     const saludo = true;
//     const adios = false;

//     return new Promise((resolve, reject) => {
//         if (holaMundo === true) {
//             resolve(new Promise((resolve, reject) => {
//                 if (saludo === true) {
//                     resolve("hola")
//                 } else {
//                     reject("errorsaludo")
//                 }
//             }))
//         } else {
//             reject(new Promise((resolve, reject) => {
//                 if (adios === true) {
//                     resolve("adios")
//                 }
//                 else {
//                     reject("erroradios")
//                 }
//             }))
//         }
//     })
// }

// promesas()
//     .then(response => console.log(response))
//     .catch(response => console.log(response))






// async away


// function action(mensaje) {
//     return new Promise((resolve) => {
//         setTimeout(() => {

//             resolve("hola " + mensaje)

//         }, 2000);
//     })


// }

// async function actionasync() {
//     const response = await action("mundo");
//     await console.log(response);
// }

// actionasync()






//promesa


function action(mensaje) {
    return new Promise((resolve, reject) => {
        if (mensaje === "hola") {
            resolve("mensaje bueno")
        } else {
            reject("mensaje malo")
        }


    })
}

try {
    action("hola")
        .then(response => console.log(response))
        .catch(response => console.log(response))
} catch (error) {
    console.log("algo salio mal en la funcion")
}

