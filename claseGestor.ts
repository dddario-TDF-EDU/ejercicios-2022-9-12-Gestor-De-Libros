import {
    Libro
} from "./claseLibro"
import {
    Autor
} from "./claseAutor"


class GestorLibros {
    protected baseDeLibros: Libro[];
    protected baseDeAutores: Autor[];

    constructor(auxLibros : Libro[], auxAutores: Autor[]) {
        this.baseDeAutores = auxAutores;
        this.baseDeLibros = auxLibros;
    }

    public busquedaGeneral() {
        console.log("-------------");
        console.log("Bienvenido al menu de busqueda general"); 
        console.log("¿que metodo desea utilizar para realizar su busqueda?")
        let readlineSync = require('readline-sync');
        let opcionIngresada = readlineSync.question("Ingrese el numero indicado para realizar la opcion deseada.");
        console.log("-------------");
        let opcionCorrecta = false;
        console.log("1 _ realizar busqueda del libro por titulo ");
        console.log("2 _ realizar busqueda del libro por ISBN");

        
        while (opcionCorrecta === false) {
            if (opcionIngresada === 1) {
                let auxTitulo = readlineSync.question("Ingrese el titulo del libro");
                this.busquedaLibroPorTitulo(auxTitulo);
                opcionCorrecta = true;
            } 
            
            //puse 2 if porq por alguna razon daba error la declaracion que pedia el ISBN
            if (opcionIngresada === 2 ) {
                let auxISBN  = readlineSync.question("Ingrese el ISBN del libro");
                this.busquedaLibroPorISBN(auxISBN);
                opcionCorrecta = true;
            }
        }
        
    }

    public busquedaLibroPorTitulo(nombreLibro: string) {
        for (let index = 0; index < this.baseDeLibros.length; index++) {
            if (this.baseDeLibros[index].getTitulo() === nombreLibro){
                this.menuOpciones(index);
                break;
            }
            
        }
    }

    public busquedaLibroPorISBN(auxISBN : number) {
        for (let index = 0; index < this.baseDeLibros.length; index++) {
            if (this.baseDeLibros[index].getISBN() === auxISBN){
                this.menuOpciones(index);
                break;
            }
            
        }
    }

    private menuOpciones(indiceArray : number) {
        console.log("-------------");
        console.log("Bienvenido al menu de opciones, ¿que desea hacer con el libro?");
        console.log("Ingrese el numero indicado para realizar la opcion deseada.")
        console.log("-------------");
        console.log("1 _ obtener nombre del autor del libro ");
        console.log("2 _ cambiar el nombre del autor del libro ");
        console.log("3 _ obtener el nombre del libro ");
        console.log("4 _ cambiar el nombre del libro ");
        console.log("5 _ obtener la editorial del libro ");
        console.log("6 _ cambiar nombre de la editorial del libro ");
        console.log("7 _ obtener la categoria del libro ");
        console.log("8 _ cambiar la categoria del libro ");
        console.log("9 _ obtener el año de publicacion");
        console.log("10_ cambiar el año de publicion del libro");
        console.log("-------------");
        let readlineSync = require('readline-sync');
        let opcionIngresada = readlineSync.question("Ingrese el numero indicado para realizar la opcion deseada.");
        this.opcionesSwitch(indiceArray, opcionIngresada);

    }

    private opcionesSwitch(indiceArray: number, opcionIngresada: number) {
        switch (opcionIngresada) {
            case 1: {
                console.log("El nombre del autor es: " + this.baseDeLibros[indiceArray].getAutor());
                break;
            }
            
            case 2: {
                let readlineSync = require('readline-sync');
                let nuevoAutor = readlineSync.question("Ingrese el nombre del autor que reemplazara al actual");
                this.baseDeLibros[indiceArray].setAutor(nuevoAutor);
                break;
            }

            case 3: {
                console.log("El nombre del libro es: " + this.baseDeLibros[indiceArray].getTitulo());
                break;
            }

            case 4: {
                let readlineSync = require('readline-sync');
                let nuevoTitulo = readlineSync.question("Ingrese el nombre del titulo que reemplazara al actual");
                this.baseDeLibros[indiceArray].setTitulo(nuevoTitulo);
                break;
            }

            case 5: {
                console.log("El nombre de la editorial del libro es: " + this.baseDeLibros[indiceArray].getEditorial());
                break;
            }

            case 6: {
                let readlineSync = require('readline-sync');
                let nuevaEditorial = readlineSync.question("Ingrese el nombre de la editorial que reemplazara la actual");
                this.baseDeLibros[indiceArray].setEditorial(nuevaEditorial);
                break;
            }

            case 7: {
                console.log("La categoria del libro es: " + this.baseDeLibros[indiceArray].getCategoria());
                break;
            }

            case 8: {
                let readlineSync = require('readline-sync');
                let nuevaCategoria = readlineSync.question("Ingrese el nombre de la categoria que reemplazara la actual");
                this.baseDeLibros[indiceArray].setCategoria(nuevaCategoria);
                break;
            }

            case 9: {
                console.log("El año de publicacion del libro es: " + this.baseDeLibros[indiceArray].getAnioPublicacion());
                break;
            }

            case 10: {
                let readlineSync = require('readline-sync');
                let nuevoAnio = readlineSync.question("Ingrese el año de publicacion que reemplazara el actual");
                this.baseDeLibros[indiceArray].setAnioPublicacion(nuevoAnio);
                break;
            }

            default : {
                console.log("Al parecer se equivoco de numero, intentelo nuevamente.");
            }

        }
    }
}

let coleccionLibros : Libro[] = new Array();
//let libroA : Libro = new Libro(0, )
