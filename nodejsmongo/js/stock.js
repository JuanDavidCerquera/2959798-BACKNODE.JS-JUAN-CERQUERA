
class Stock {
    constructor() {
        this.productos = []
    }


    añadirProducto(producto) {
        this.productos.push(producto);
    }

    consultarProductos() {
        this.productos.forEach((producto, index) => {
            if (!producto.fechaCaducidad) {
                console.log(`Producto ${index + 1}`);
                console.log(`  Nombre: ${producto.nombre}`);
                console.log(`  Precio: ${producto.precio}`);
                console.log(`  Cantidad: ${producto.cantidad}`);
                console.log(`  Tipo de producto: ${producto.tipoproducto}`);
            } else {
                console.log(`Producto ${index + 1}`);
                console.log(`  Nombre: ${producto.producto.nombre}`);
                console.log(`  Precio: ${producto.producto.precio}`);
                console.log(`  Cantidad: ${producto.producto.cantidad}`);
                console.log(`  Tipo de producto: ${producto.producto.tipoproducto}`);
                console.log(`  Fecha de Caducidad: ${producto.fechaCaducidad}`);
            }
        });
    }


}
module.exports = Stock;