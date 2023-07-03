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
}