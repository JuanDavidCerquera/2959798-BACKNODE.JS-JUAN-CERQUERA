

class ProductoComida {
    constructor(producto, fechaCaducidad) {
        this.producto = producto
        this.fechaCaducidad = fechaCaducidad;
    }

    consultarProducto() {
        console.log(`
        La información del producto es:
        Nombre: ${this.nombre} 
        Precio:${this.precio}
        Cantidad: ${this.cantidad}
        Tipo de producto: ${this.tipoproducto}
        Fecha de caducidad: ${this.fechaCaducidad}`);
    }
}

module.exports = ProductoComida;