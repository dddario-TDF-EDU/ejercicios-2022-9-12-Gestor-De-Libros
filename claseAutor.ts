export class Autor {
    protected nombre: string;
    protected apellido: string;
    protected anioNacimiento: number;
    //protected librosEscritos: Libros[];

    constructor (auxNombre : string, auxApellido : string, auxAnio? : number ) {
        this.nombre = auxNombre;
        this.apellido = auxApellido;
        if (auxAnio === undefined){
            this.anioNacimiento = 0;
        } else {
            this.anioNacimiento = auxAnio;
        }
    }

}