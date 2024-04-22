const Productos = require('./productos');

class ProductoComida extends Productos {
    constructor(nombre, precio, cantidad, tipoproducto, fechaCaducidad) {
        super(nombre, precio, cantidad, tipoproducto);
        this.fechaCaducidad = fechaCaducidad;
    }

    consultarProducto() {
        super.consultarProducto();
        console.log(`Fecha de caducidad: ${this.fechaCaducidad}`);
    }
}

module.exports = ProductoComida;