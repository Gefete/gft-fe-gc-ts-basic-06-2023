const deCarga : number = 5;

//Clase Lavadora
class Lavadora extends Electrodomestico{
    //1-Atributos
    protected carga : number;

    //2-Constructor
    constructor(newConsumo:string){
        super(newConsumo);
        this.carga = deCarga;
    }

    getCarga():number{
        return this.carga;
    }

    //3-Metodos Propios
    getPrecioBase(): number {
        let precBase = super.getPrecioBase();
        return precBase;
    }
}