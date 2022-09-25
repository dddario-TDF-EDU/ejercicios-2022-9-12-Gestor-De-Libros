import {
    Libro
} from "./claseLibro"

export class Autor {
    protected nombre: string;
    protected apellido: string;
    protected librosEscritos: Libro[];

    constructor (auxNombre : string, auxApellido : string) {
        this.nombre = auxNombre;
        this.apellido = auxApellido;
    }

}