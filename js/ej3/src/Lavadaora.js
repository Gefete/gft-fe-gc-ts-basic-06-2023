"use strict";
//Clase Lavadora
class Lavadora extends Electrodomestico {
    //2-Constructor
    constructor(newConsumo) {
        super(newConsumo);
        this.carga = 5;
    }
    //3-Metodos Propios
    getPrecioBase() {
        let precBase = super.getPrecioBase();
        return precBase;
    }
}
