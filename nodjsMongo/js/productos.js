class Productos {

    constructor(nombre, precio, cantidad, tipoproducto) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.tipoproducto = tipoproducto
    }

    consultarProducto() {
        console.log('La información del producto es:');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Tipo de producto: ${this.tipoproducto}`);
    }
}

module.exports = Productos;