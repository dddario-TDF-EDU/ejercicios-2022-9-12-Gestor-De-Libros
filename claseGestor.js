"use strict";
exports.__esModule = true;
var claseLibro_1 = require("./claseLibro");
var claseAutor_1 = require("./claseAutor");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(auxLibros, auxAutores) {
        this.baseDeAutores = auxAutores;
        this.baseDeLibros = auxLibros;
    }
    GestorLibros.prototype.busquedaGeneral = function () {
        console.log("-------------");
        console.log("Bienvenido al menu de busqueda general");
        console.log("¿que metodo desea utilizar para realizar?");
        var readlineSync = require('readline-sync');
        console.log("1 _ realizar busqueda del libro por titulo ");
        console.log("2 _ realizar busqueda del libro por ISBN");
        console.log("3 _ ingresar nuevo libro");
        var opcionIngresada = Number(readlineSync.question("Ingrese el numero indicado para realizar la opcion deseada. "));
        console.log("-------------");
        var opcionCorrecta = false;
        switch (opcionIngresada) {
            case 1: {
                var auxTitulo = readlineSync.question("Ingrese el titulo del libro");
                this.busquedaLibroPorTitulo(auxTitulo);
                opcionCorrecta = true;
                break;
            }
            case 2: {
                var auxISBN = readlineSync.question("Ingrese el ISBN del libro");
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
    };
    GestorLibros.prototype.busquedaLibroPorTitulo = function (nombreLibro) {
        var encontrado = false;
        for (var index = 0; index < this.baseDeLibros.length; index++) {
            //añado el .toUpperCase para que a la hora de buscar no importe si hay diferencia de mayusculas o minusculas
            if (this.baseDeLibros[index].getTitulo().toUpperCase() === nombreLibro.toUpperCase()) {
                this.menuOpciones(index);
                encontrado = true;
                break;
            }
        }
        if (encontrado === false) {
            console.log("libro no encontrado");
        }
    };
    GestorLibros.prototype.busquedaLibroPorISBN = function (auxISBN) {
        var encontrado = false;
        for (var index = 0; index < this.baseDeLibros.length; index++) {
            //no entiendo porq si ambos son number con triple igual no funciona el if 
            if (this.baseDeLibros[index].getISBN() === Number(auxISBN)) {
                this.menuOpciones(index);
                encontrado = true;
                break;
            }
        }
        if (encontrado === false) {
            console.log("libro no encontrado");
        }
    };
    GestorLibros.prototype.validarISBN = function (paramISBN) {
        var ISBNrepetido = false;
        for (var i = 0; i < this.baseDeLibros.length; i++) {
            //no entiendo porq si ambos son number con triple igual no funciona el if 
            if (Number(paramISBN) === this.baseDeLibros[i].getISBN()) {
                ISBNrepetido = true;
                return ISBNrepetido;
            }
        }
        return ISBNrepetido;
    };
    GestorLibros.prototype.ingresarLibro = function () {
        var readlineSync = require('readline-sync');
        var auxISBN = readlineSync.question("Ingrese el ISBN del libro ");
        if (this.validarISBN(auxISBN) === true) {
            console.log("ISBN repetido, verifique el numero ingresado");
        }
        else {
            var auxTitulo = readlineSync.question("Ingrese el titulo del libro");
            var auxAutor = readlineSync.question("Ingrese el autor del libro");
            var auxAnio = readlineSync.question("Ingrese el año de publicación del libro");
            var auxCategoria = readlineSync.question("Ingrese la categoria del libro");
            var auxEditorial = readlineSync.question("Ingrese la editorial del libro");
            var nuevoLibro = new claseLibro_1.Libro(auxISBN, auxTitulo, auxAutor, auxAnio, auxCategoria, auxEditorial);
            //ya creado el libro lo agrego al array
            this.baseDeLibros.push(nuevoLibro);
            console.log("libro ingresado");
        }
        this.busquedaGeneral();
    };
    GestorLibros.prototype.menuOpciones = function (indiceArray) {
        console.log("-------------");
        console.log("Bienvenido al menu de opciones, ¿que desea hacer con el libro?");
        console.log("Ingrese el numero indicado para realizar la opcion deseada.");
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
    };
    GestorLibros.prototype.opcionesSwitch = function (indiceArray) {
        var readlineSync = require('readline-sync');
        var opcionIngresada = Number(readlineSync.question("Ingrese el numero indicado para realizar la opcion deseada."));
        //si no llamo la funcion Number no funciona el switch WTF, pero si declaro la variable tipo number tampoco funciona
        switch (opcionIngresada) {
            case 1: {
                console.log("El nombre del autor es: " + this.baseDeLibros[indiceArray].getAutor());
                break;
            }
            case 2: {
                var readlineSync_1 = require('readline-sync');
                var nuevoAutor = readlineSync_1.question("Ingrese el nombre del autor que reemplazara al actual");
                this.baseDeLibros[indiceArray].setAutor(nuevoAutor);
                break;
            }
            case 3: {
                console.log("El nombre del libro es: " + this.baseDeLibros[indiceArray].getTitulo());
                break;
            }
            case 4: {
                var readlineSync_2 = require('readline-sync');
                var nuevoTitulo = readlineSync_2.question("Ingrese el nombre del titulo que reemplazara al actual");
                this.baseDeLibros[indiceArray].setTitulo(nuevoTitulo);
                break;
            }
            case 5: {
                console.log("El nombre de la editorial del libro es: " + this.baseDeLibros[indiceArray].getEditorial());
                break;
            }
            case 6: {
                var readlineSync_3 = require('readline-sync');
                var nuevaEditorial = readlineSync_3.question("Ingrese el nombre de la editorial que reemplazara la actual");
                this.baseDeLibros[indiceArray].setEditorial(nuevaEditorial);
                break;
            }
            case 7: {
                console.log("La categoria del libro es: " + this.baseDeLibros[indiceArray].getCategoria());
                break;
            }
            case 8: {
                var readlineSync_4 = require('readline-sync');
                var nuevaCategoria = readlineSync_4.question("Ingrese el nombre de la categoria que reemplazara la actual");
                this.baseDeLibros[indiceArray].setCategoria(nuevaCategoria);
                break;
            }
            case 9: {
                console.log("El año de publicacion del libro es: " + this.baseDeLibros[indiceArray].getAnioPublicacion());
                break;
            }
            case 10: {
                var readlineSync_5 = require('readline-sync');
                var nuevoAnio = readlineSync_5.question("Ingrese el año de publicacion que reemplazara el actual");
                this.baseDeLibros[indiceArray].setAnioPublicacion(nuevoAnio);
                break;
            }
            case 11: {
                this.baseDeLibros.splice(indiceArray, 1);
                this.busquedaGeneral();
                break;
            }
            case 12: {
                break;
            }
            default: {
                console.log("Al parecer se equivoco de numero, intentelo nuevamente.");
                this.opcionesSwitch(indiceArray);
            }
        }
    };
    return GestorLibros;
}());
//creacion de variables
var libroA = new claseLibro_1.Libro(0, "El patito", "Pazos Ariel", 1999, "Fantasia", "Frutas");
var libroB = new claseLibro_1.Libro(2, "El Principe", "Maquiavelo", 1999, "Politica", "Politik");
var coleccionLibros = [libroA, libroB];
var autorA = new claseAutor_1.Autor("Ariel", "Pazos");
var autorB = new claseAutor_1.Autor("Nicolas", "Maquiavelo");
var coleccionAutores = [autorA, autorB];
var biblioteca = new GestorLibros(coleccionLibros, coleccionAutores);
//llamado a funcion.
biblioteca.busquedaGeneral();
