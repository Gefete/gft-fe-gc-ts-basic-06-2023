"use strict";
const defColor = 'blanco';
const defConsumo = 'F';
const defPrecio = 100;
const defPeso = 5;
class Electrodomestico {
    //2-Cronstructor de clase
    constructor(newConsumo) {
        this.color = defColor;
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.peso = defPeso;
        this.preciobase = defPrecio;
    }
    //3-Métodos propios
    getPrecioBase() {
        return this.preciobase;
    }
    getColor() {
        return this.color;
    }
    getConsumo() {
        return this.consumo;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        switch (letra) {
            case 'A':
                return 'A';
                break;
            case 'B':
                return 'B';
                break;
            case 'C':
                return 'C';
                break;
            case 'D':
                return 'D';
                break;
            case 'E':
                return 'E';
                break;
            default:
                return defConsumo;
                break;
        }
    }
}
