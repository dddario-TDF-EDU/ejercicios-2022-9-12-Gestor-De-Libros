export class Libro {
    protected ISBN: number;
    protected titulo: string;
    protected autor: string;
    protected anioPublicacion: number;
    protected categoria: string;
    protected editorial: string;
    
    constructor (auxISBN : number, auxTitulo : string, auxAutor : string, auxAnio : number, auxCategoria : string, auxEditorial: string) {
        this.ISBN = auxISBN;
        this.titulo = auxTitulo;
        this.autor = auxAutor;
        this.anioPublicacion = auxAnio;
        this.categoria = auxCategoria;
        this.editorial = auxEditorial;
    }

}