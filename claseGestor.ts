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
        console.log("¿que metodo desea utilizar para realizar?")
        let readlineSync = require('readline-sync');
        console.log("1 _ realizar busqueda del libro por titulo ");
        console.log("2 _ realizar busqueda del libro por ISBN");
        console.log("3 _ ingresar nuevo libro");
        let opcionIngresada = Number(readlineSync.question("Ingrese el numero indicado para realizar la opcion deseada. "));
        console.log("-------------");
        let opcionCorrecta = false;
        

        switch (opcionIngresada) {
            case 1: {
                let auxTitulo = readlineSync.question("Ingrese el titulo del libro");
                this.busquedaLibroPorTitulo(auxTitulo);
                opcionCorrecta = true;
                break;
            }
            case 2: {
                let auxISBN  = readlineSync.question("Ingrese el ISBN del libro");
                this.busquedaLibroPorISBN(auxISBN);
                opcionCorrecta = true;
                break;
            }
            case 3: {
                this.ingresarLibro();
                break;
            }
            default: {
                this.busquedaGeneral();
                break;
            }
        }
    }

    private busquedaLibroPorTitulo(nombreLibro: string): void {
        let encontrado = false;
        for (let index = 0; index < this.baseDeLibros.length; index++) {
            //añado el .toUpperCase para que a la hora de buscar no importe si hay diferencia de mayusculas o minusculas
            if (this.baseDeLibros[index].getTitulo().toUpperCase() === nombreLibro.toUpperCase()){
                this.menuOpciones(index);
                encontrado = true;
                break;
            }
        }
        if (encontrado === false){
            console.log("libro no encontrado");
        }
    }

    private busquedaLibroPorISBN(auxISBN : number): void {
        let encontrado = false;
        for (let index = 0; index < this.baseDeLibros.length; index++) {
            //no entiendo porq si ambos son number con triple igual no funciona el if, si o si en necesaria la funcion Number 
            if (this.baseDeLibros[index].getISBN() === Number(auxISBN)){
                this.menuOpciones(index);
                encontrado = true;
                break;
            }
        }
        if (encontrado === false){
            console.log("libro no encontrado");
        }
    }

    private validarISBN(paramISBN : number): boolean {
        let ISBNrepetido = false;
        for (let i = 0; i < this.baseDeLibros.length; i++) {
            //no entiendo porq si ambos son number con triple igual no funciona el if, si o si en necesaria la funcion Number
            if (Number(paramISBN) === this.baseDeLibros[i].getISBN()) {
                ISBNrepetido = true;
                return ISBNrepetido;
            }
        }
        return ISBNrepetido;
    }

    private ingresarLibro() {
        let readlineSync = require('readline-sync');
        let auxISBN : number = readlineSync.question("Ingrese el ISBN del libro ");
        if (this.validarISBN(auxISBN) === true) {
            console.log("ISBN repetido, verifique el numero ingresado");
        } else {
            let auxTitulo: string = readlineSync.question("Ingrese el titulo del libro ");
            let auxAutor: string = readlineSync.question("Ingrese el autor del libro ");
            let auxAnio: number = readlineSync.question("Ingrese el año de publicación del libro ");
            let auxCategoria: string = readlineSync.question("Ingrese la categoria del libro ");
            let auxEditorial: string = readlineSync.question("Ingrese la editorial del libro ");
            let nuevoLibro : Libro = new Libro(auxISBN, auxTitulo, auxAutor, auxAnio, auxCategoria, auxEditorial);
            //ya creado el libro lo agrego al array
            this.baseDeLibros.push(nuevoLibro);
            console.log("libro ingresado")
        }
        this.busquedaGeneral();
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
        console.log("10 _ cambiar el año de publicion del libro");
        console.log("11 _ eliminar libro de la lista");
        console.log("12 _ SALIR");
        console.log("-------------");
        //
        this.opcionesSwitch(indiceArray);

    }

    private opcionesSwitch(indiceArray: number) {
        let readlineSync = require('readline-sync');
        let opcionIngresada = Number(readlineSync.question("Ingrese el numero indicado para realizar la opcion deseada. "));
        //si no llamo la funcion Number no funciona el switch WTF, pero si declaro la variable tipo number tampoco funciona
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

            case 11: {
                this.baseDeLibros.splice(indiceArray,1);
                console.log("Archivo eliminado.")
                this.busquedaGeneral();
                break;
            }

            case 12: {
                break;
            }

            default : {
                console.log("Al parecer se equivoco de numero, intentelo nuevamente.");
                this.opcionesSwitch(indiceArray);
            }

        }
    }
}

//creacion de variables
let libroA : Libro = new Libro (0,"El patito","Pazos Ariel",1999,"Fantasia","Frutas");
let libroB : Libro = new Libro (2,"El Principe","Maquiavelo",1999,"Politica","Politik");
let coleccionLibros : Libro[] = [libroA,libroB];
let autorA : Autor = new Autor ("Ariel","Pazos");
let autorB : Autor = new Autor ("Nicolas","Maquiavelo");
let coleccionAutores :Autor[] = [autorA,autorB];
let biblioteca : GestorLibros = new GestorLibros(coleccionLibros,coleccionAutores);
//llamado a funcion.
biblioteca.busquedaGeneral();


