"use strict";
//Instancas de las clase electrodomestico
let electrodomesticos = [];
electrodomesticos[0] = new Electrodomestico("A");
electrodomesticos[1] = new Lavadora("F");
electrodomesticos[2] = new Television("C");
electrodomesticos[3] = new Electrodomestico("D");
electrodomesticos[4] = new Lavadora("A");
electrodomesticos[5] = new Television("F");
electrodomesticos[6] = new Electrodomestico("E");
electrodomesticos[7] = new Lavadora("B");
electrodomesticos[8] = new Television("E");
electrodomesticos[9] = new Electrodomestico("A");
let sumatotal = 0;
let sumatotallava = 0;
let sumatotaltele = 0;
let sumatotalelec = 0;
for (let i = 0; i < electrodomesticos.length; i++) {
    console.log(electrodomesticos[i]);
    console.log(electrodomesticos[i].precioFinal());
    sumatotal += electrodomesticos[i].precioFinal();
    if (electrodomesticos[i] instanceof Lavadora) {
        sumatotallava += electrodomesticos[i].precioFinal();
    }
    else if (electrodomesticos[i] instanceof Television) {
        sumatotaltele += electrodomesticos[i].precioFinal();
    }
    else if (electrodomesticos[i] instanceof Electrodomestico) {
        sumatotalelec += electrodomesticos[i].precioFinal();
    }
}
console.log("Precio total Electrodomesticos " + sumatotalelec);
console.log("Precio total Lavadoras " + sumatotallava);
console.log("Precio total  Televisiones" + sumatotaltele);
console.log("Precio total de todo " + sumatotal);
