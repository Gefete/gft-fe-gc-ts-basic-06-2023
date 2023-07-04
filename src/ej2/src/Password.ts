class Password{
    private longitud : number;
    private contrasenya : string;

    constructor(){
        this.longitud = 8;
        this.contrasenya = this.genPass(this.longitud);
    }

    genPass (longitud: number) : string {
        let password:string ="";
        for (let i = 0; i < longitud; i++) {
            password += Math.floor(Math.random() * 9);
            password += String.fromCharCode(Math.floor(Math.random() * 25)+65);
            i++;
        }
        return password;
    }
}