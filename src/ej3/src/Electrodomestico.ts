//defino la clase electrodomestico
type tColor = 'blanco' | 'negro' | 'rojo' | 'azul' |  'gris' ;

const defColor : tColor = 'blanco';
const defConsumo = 'F';
const defPrecio = 100;
const defPeso = 5;

class Electrodomestico{
    //1-Atributos
    protected preciobase:number;
    protected color:string;
    protected consumo:string;
    protected peso:number;

    //2-Cronstructor de clase
    constructor(newConsumo:string){
        this.color = defColor;
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.peso = defPeso;
        this.preciobase =  defPrecio;
    }

    //3-Métodos propios
    getPrecioBase():number{
        return this.preciobase;
    }
    getColor():string{
        return this.color;
    }
    getConsumo():string{
        return this.consumo;
    }
    getPeso():number{
        return this.peso;
    }

    comprobarConsumoEnergetico(letra:string){
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
    precioFinal():number{
        let incrementPrice:number=0;
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
    
        if(this.peso >= 0 && this.peso <= 19){
            incrementPrice += 10;
        }else if(this.peso >= 20 && this.peso <= 49){
            incrementPrice += 50;
        }else if(this.peso >= 50 && this.peso <= 79){
            incrementPrice += 80;
        }else{
            incrementPrice += 100;
        }

        return this.preciobase + incrementPrice;
    }
}