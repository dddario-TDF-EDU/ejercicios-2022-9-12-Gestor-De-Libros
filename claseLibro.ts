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

    public getISBN(): number {
        return this.ISBN
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(nuevoAutor: string) {
        this.autor = nuevoAutor;
    }
    
    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(nuevoTitulo: string) {
        this.titulo = nuevoTitulo;
    }

    public getAnioPublicacion(): number {
        return this.anioPublicacion;
    }
    
    public setAnioPublicacion(nuevoAnio: number) {
        this.anioPublicacion = nuevoAnio;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(nuevaCategoria : string) {
        this.categoria = nuevaCategoria;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(nuevaEditorial : string) {
        this.editorial = nuevaEditorial;
    }
}