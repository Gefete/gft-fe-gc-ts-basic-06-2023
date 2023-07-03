//Class persona

//nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura
type tipoSexo = 'H' | 'M';
const defSexo : tipoSexo = 'H';

class Persona {
    //1-Atributos de class
    //private
    private nombre : string;
    private edad : number;
    private DNI : string;
    private sexo : string;
    private peso : number;
    private altura : number;

    //2-Constructor
    constructor(nomDNI:string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = nomDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }

    //3-Métodos propios
    saluda(){
        console.log(`Hola mundo ${this.nombre}`);
    }
}