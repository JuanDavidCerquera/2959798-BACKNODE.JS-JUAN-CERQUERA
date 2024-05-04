
class Sucursal {
    constructor(nombreSucural, interes, banco, cliente) {
        this.nombreSucural = nombreSucural
        this.interes = interes
        this.banco = banco
        this.titular = cliente

    }

    prestamo(cantidad) {

        if (cantidad > 0 && this.banco.monto >= cantidad) {

            const cuotaInteres = cantidad * this.interes
            this.banco.monto -= cantidad;
            this.titular.prestamo += parseInt(cantidad);
            console.log(`La candidad solicitada es de ${cantidad} con un interes de ${this.interes * 100}% la cuota del interes quedaria de : ${cuotaInteres}`)

        } else {

            console.log(`No se a podido realizar el prestamo`);
        }
    }
}

module.exports = Sucursal;
