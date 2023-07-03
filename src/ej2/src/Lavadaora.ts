//Clase Lavadora

class Lavadora extends Electrodomestico{
    //1-Atributos
    protected carga : number;

    //2-Constructor
    constructor(newConsumo:string){
        super(newConsumo);
        this.carga = 5;
    }

    //3-Metodos Propios
    getPrecioBase(): number {
        let precBase = super.getPrecioBase();
        return precBase;
    }
}