

//Clase Lavadora
class Television extends Electrodomestico{
    //1-Atributos
    private resolucion:number;
    private cuatroK:boolean;

    //2-Constructor
    constructor(newConsumo:string){
        super(newConsumo);
        this.resolucion = 20;
        this.cuatroK = false;
    }
    

    getResolucion():number{
        return this.resolucion;
    }
    getCuatroK():boolean{
        return this.cuatroK;
    }

    //3-Metodos Propios
    getPrecioBase(): number {
        let precBase = super.getPrecioBase();
        return precBase;
    }

    precioFinal(): number {
        let precioTotal = super.precioFinal();
        if (this.resolucion > 40){
            precioTotal = precioTotal*0.3;
        }
        if(this.cuatroK){
            precioTotal +=50;
        }
        return precioTotal;
    }
}