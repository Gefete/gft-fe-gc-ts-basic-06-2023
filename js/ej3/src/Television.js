"use strict";
//Clase Lavadora
class Television extends Electrodomestico {
    //2-Constructor
    constructor(newConsumo) {
        super(newConsumo);
        this.resolucion = 20;
        this.cuatroK = false;
    }
    getResolucion() {
        return this.resolucion;
    }
    getCuatroK() {
        return this.cuatroK;
    }
    //3-Metodos Propios
    getPrecioBase() {
        let precBase = super.getPrecioBase();
        return precBase;
    }
    precioFinal() {
        let precioTotal = super.precioFinal();
        if (this.resolucion > 40) {
            precioTotal = precioTotal * 0.3;
        }
        if (this.cuatroK) {
            precioTotal += 50;
        }
        return precioTotal;
    }
}
