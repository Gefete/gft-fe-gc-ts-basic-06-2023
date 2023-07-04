"use strict";
const deCarga = 5;
//Clase Lavadora
class Lavadora extends Electrodomestico {
    //2-Constructor
    constructor(newConsumo) {
        super(newConsumo);
        this.carga = deCarga;
    }
    getCarga() {
        return this.carga;
    }
    //3-Metodos Propios
    getPrecioBase() {
        let precBase = super.getPrecioBase();
        return precBase;
    }
}
