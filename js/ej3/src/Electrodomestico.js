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
    precioFinal() {
        let incrementPrice = 0;
        switch (this.consumo) {
            case 'A':
                incrementPrice += 100;
                break;
            case 'B':
                incrementPrice += 80;
                break;
            case 'C':
                incrementPrice += 60;
                break;
            case 'D':
                incrementPrice += 50;
                break;
            case 'E':
                incrementPrice += 30;
                break;
            default:
                incrementPrice += 10;
                break;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            incrementPrice += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            incrementPrice += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            incrementPrice += 80;
        }
        else {
            incrementPrice += 100;
        }
        return this.preciobase + incrementPrice;
    }
}
