"use strict";
//Class persona
const defSexo = 'H';
class Persona {
    //2-Constructor
    constructor(nomDNI) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = nomDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    //3-Métodos propios
    saluda() {
        console.log(`Hola mundo ${this.nombre} esta presente`);
    }
}
