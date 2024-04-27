const Productos = require('./productos');
const ProductoComida = require('./productoComida')
const Stock = require('./stock');

const main = async () => {


    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // const miProducto = new Productos("Camiseta", 20, 50, "Ropa");
    // miProducto.consultarProducto();

    // const helado = new ProductoComida("helado de chocolate", 2, 1, "comida", "12-04-2024");
    // helado.consultarProducto();

    // const question = (query) => new Promise(resolve => readline.question(query, resolve));
    const input = (query) => new Promise(resolve => readline.question(query, resolve));

    let nombreProducto = "";
    let precioProducto = "";
    let cantidadProducto = "";
    let tipoProducto = "";
    let fechaCaducidadProducto = "";
    let stock = new Stock();
    let menu = true;
    let miProducto = new Productos("", "", "", "")

    while (menu) {
        console.log(`
        elige una opcion:
        1. Ingresar producto sin fecha de caducidad.
        2. Ingresar producto con fecha de caducidad.
        3. Ver los productos registrados.
        4. Salir.
        `);

        let opcion = await input('\n Elige una opción: ');

        switch (opcion) {
            case '1':
                nombreProducto = await input('Ingrese el nombre del producto: ');
                precioProducto = await input('Ingrese el precio del producto: ');
                cantidadProducto = await input('Ingrese el cantidad del producto: ');
                tipoProducto = await input('Ingrese el tipo del producto: ');
                miProducto = new Productos(nombreProducto, precioProducto, cantidadProducto, tipoProducto);
                console.log('El producto: ');
                miProducto.consultarProducto();
                stock.añadirProducto(miProducto);
                console.log('Se añadio correctamente');
                break;
            case '2':
                nombreProducto = await input('Ingrese el nombre del producto: ');
                precioProducto = await input('Ingrese el precio del producto: ');
                cantidadProducto = await input('Ingrese el cantidad del producto: ');
                tipoProducto = await input('Ingrese el tipo del producto: ');
                miProducto = new Productos(nombreProducto, precioProducto, cantidadProducto, tipoProducto);
                fechaCaducidadProducto = await input('Ingrese la fecha de caducidad del producto: ');
                const miproductocaducable = new ProductoComida(miProducto, fechaCaducidadProducto);
                console.log('El producto: ');
                miproductocaducable.consultarProducto();
                stock.añadirProducto(miproductocaducable);
                console.log('Se añadio correctamente');
                break;
            case '3':
                stock.consultarProductos();
                break;
            case '4':
                menu = false
                console.log('Finalizando el sistema');
                break;
        }
    }
    readline.close();
}
main();