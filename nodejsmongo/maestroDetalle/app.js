var mysql = require('mysql');
const readline = require('readline');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maestrodetalle'
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('conexion exitosa');
    }
});
var id = 1;
function mostrarFactura() {
    conexion.query('SELECT * FROM factura WHERE id = ?', [id], function (error, registros) {
        if (error) {
            throw error;
        } else {
            registros.forEach(registro => {
                console.log(registro);
            });
        }
    });
}

function actualizarFactura() {
    conexion.query('UPDATE factura SET fecha = "2024-05-01" WHERE id = 1', function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log('registro actualizado', results);
        }
    });
}

function guardarFactura() {
    conexion.query('INSERT INTO factura (fecha) VALUES ("2024-02-14")', function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log('registro agregado', results);
        }
    });
}
function eliminarFactura() {
    conexion.query('DELETE FROM factura WHERE id = 6', function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log('registro eliminado', results);
        }
    });
}

function mostrarFacturaDetalle() {
    conexion.query('SELECT * FROM factura_detalle', function (error, registros) {
        if (error) {
            throw error;
        } else {
            registros.forEach(registro => {
                console.log(registro);
            });
        }
    });
}

function actualizarFacturaDetalle() {
    conexion.query('UPDATE factura_detalle SET precio = 25.00 WHERE id = 1', function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log('Registro actualizado:', results);
        }
    });
}

function guardarFacturaDetalle() {
    conexion.query('INSERT INTO factura_detalle (producto, factura_id, precio) VALUES (?, ?, ?)', ['Producto 1', 1, 15.99], function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log('Registro agregado:', results);
        }
    });
}

function eliminarFacturaDetalle() {
    conexion.query('DELETE FROM factura_detalle WHERE id = 6', function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log('Registro eliminado:', results);
        }
    });
}

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


read.question('Ingrese el número de la función que desea ejecutar (0 para salir): ', function (input) {
    opcion = parseInt(input);
    switch (opcion) {
        case 1:
            mostrarFactura();
            break;
        case 2:
            actualizarFactura();
            break;
        case 3:
            guardarFactura();
            break;
        case 4:
            eliminarFactura();
            break;
        case 5:
            mostrarFacturaDetalle();
            break;
        case 6:
            actualizarFacturaDetalle();
            break;
        case 7:
            guardarFacturaDetalle();
            break;
        case 8:
            eliminarFacturaDetalle();
            break;
        case 0:
            console.log('Saliendo del programa...');
            conexion.end();
            break;
        default:
            console.log('Opción no válida');
            break;
    }
});


