class Productos {

    constructor(nombre, precio, cantidad, tipoproducto) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.tipoproducto = tipoproducto
    }

    consultarProducto() {
        console.log(`
        La información del producto es: 
        Nombre: ${this.nombre} 
        Precio:${this.precio} 
        Cantidad: ${this.cantidad} 
        Tipo de producto: ${this.tipoproducto}`);
    }
}

module.exports = Productos;