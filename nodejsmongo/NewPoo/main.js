const Cliente = require('./cliente');
const Cuenta = require('./cuenta');
const Banco = require('./banco');
const Sucursal = require('./sucursal');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise(resolve => readline.question(query, resolve));

async function main() {
    const ListaCliente = [];
    const ListaCuenta = [];
    let clienteUsado;
    let cuentaUsado;

    async function agregarCliente() {
        const nombreCliente = await question('Ingresa nombre del cliente: ');
        const direccionCliente = await question('Ingresa la direccion del cliente: ');
        const telefonoCliente = await question('Ingresa el telefono del cliente: ');
        const tipoDocumentoCliente = await question('Ingresa el tipo de documento del cliente: ');
        const documentoCliente = await question('Ingresa el documento del cliente: ');
        const nuevoCliente = await new Cliente(nombreCliente, direccionCliente, telefonoCliente, tipoDocumentoCliente, documentoCliente, 0);
        await ListaCliente.push(nuevoCliente);
        console.log(nuevoCliente);
    }

    async function agregarCuenta(cliente) {
        const tipoCuenta = await question('Ingresa el tipo de cuenta: ');
        const numeroCuenta = await question('Ingresa el numero de cuenta: ');
        const contrasenia = await question('Ingresa la contrasenia: ');
        const saldo = await question('Ingresa el saldo: ');
        const nuevacuenta = await new Cuenta(cliente, tipoCuenta, numeroCuenta, contrasenia, parseInt(saldo));
        await ListaCuenta.push(nuevacuenta);

    }

    function buscarClientePorDocumento(documento) {
        for (let i = 0; i < ListaCliente.length; i++) {
            if (ListaCliente[i].documento === documento) {
                return ListaCliente[i];
            }
        }
        return null;
    }

    function buscarCuentaPorContraseña(contrasenia) {
        for (let i = 0; i < ListaCuenta.length; i++) {
            if (ListaCuenta[i].contrasenia === contrasenia) {
                return ListaCuenta[i];
            }
        }
        return null;
    }

    const banColombia = new Banco("banColombia", 5000000);
    const sucursalNeiva = new Sucursal("Neiva", 0.02, banColombia, clienteUsado);
    const sucursalGarzon = new Sucursal("Garzon", 0.05, banColombia, clienteUsado);

    let continuar = true;

    while (continuar) {

        console.log('cliente: ', clienteUsado);
        console.log('cuenta: ', cuentaUsado);
        console.log('\n-- Menú --');
        console.log('1. Depositar');
        console.log('2. Retirar');
        console.log('3. Consultar saldo');
        console.log('4. Información de la cuenta');
        console.log('5. Historial de transacciones');
        console.log('6. Prestamo');
        console.log('7. Salir');
        console.log('8. registrar cliente');
        console.log('9. ingresar cliente');
        console.log('10. ingresar cuenta');
        console.log('11. ingresar cuenta');

        const opcion = await question('\nElige una opción: ');

        switch (opcion) {
            case '1':
                try {
                    const cantidadDeposito = await question('Ingresa la cantidad a depositar: ');
                    await cuentaUsado.depositar(parseInt(cantidadDeposito));
                } catch (error) {
                    console.log('no ha iniciado seccion con su cuenta: ', error);
                }
                break;
            case '2':
                try {
                    const cantidadRetiro = await question('Ingresa la cantidad a retirar: ');
                    await cuentaUsado.retirar(parseInt(cantidadRetiro));
                } catch (error) {
                    console.log('no ha iniciado seccion con su cuenta: ', error);
                }
                break;
            case '3':
                try {
                    cuentaUsado.consultarSaldo();
                } catch (error) {
                    console.log('no ha iniciado seccion con su cuenta: ', error);
                }
                break;
            case '4':
                try {
                    cuentaUsado.informacionCuenta();
                } catch (error) {
                    console.log('no ha iniciado seccion con su cuenta: ', error);
                }
                break;
            case '5':
                try {
                    cuentaUsado.imprimirHistorialTransacciones();
                } catch (error) {
                    console.log('no ha iniciado seccion con su cuenta: ', error);
                }
                break;
            case '6':

                const cantidadPrestamo = await question(`Ingresa la cantidad del prestamo a solicitar: `);
                console.log(`Escoge una de estas sucursales: Neiva o Garzon`);
                const seleccionSucursal = await question(`Ingresa la sucursal: `);

                if (seleccionSucursal.toLowerCase() == 'neiva') {
                    sucursalNeiva.prestamo(cantidadPrestamo);
                } else if (seleccionSucursal.toLowerCase() == 'garzon') {
                    sucursalGarzon.prestamo(cantidadPrestamo);
                } else {
                    console.log('Seleccion invalida');
                }
                break;
            case '7':

                console.log('Saliendo del programa...');
                continuar = false;
                break;
            case '8':
                try {
                    await agregarCliente();
                } catch (error) {
                    console.log(error);
                }
                break;
            case '9':
                try {
                    var documentobuscar = await question('Ingresa el documento del cliente: ');
                    clienteUsado = await buscarClientePorDocumento(documentobuscar);
                } catch (error) {
                    console.log(error);
                }
                break;
            case '10':
                try {
                    await agregarCuenta(clienteUsado);
                } catch (error) {
                    console.log('algo salio mal al agregar la cuenta: ', error);
                }
                break;
            case '11':
                try {
                    var contraseniabuscar = await question('Ingresa la contrasenia: ');
                    cuentaUsado = await buscarCuentaPorContraseña(contraseniabuscar);
                } catch (error) {
                    console.log('algo salio mal al encontrar la cuenta: ', error);
                }
                break;
            default:
                console.log('Opción no válida. Por favor, elige una opción válida.');
        }

        if (continuar) {
            const continuarInput = await question('¿Desea realizar otra operación? (Sí/No): ');
            if (typeof continuarInput === 'string' && continuarInput.toLowerCase() !== 'si') {
                continuar = false;
                console.log('Saliendo del programa...');
            }
        }
    }
    readline.close();
}
main();