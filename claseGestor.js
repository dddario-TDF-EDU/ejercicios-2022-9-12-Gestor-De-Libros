"use strict";
exports.__esModule = true;
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
    }
    GestorLibros.prototype.busquedaLibro = function (auxISBN) {
        for (var index = 0; index < this.baseDeLibros.length; index++) {
            if (this.baseDeLibros[index].getISBN() === auxISBN) {
                this.menuOpciones(index);
                break;
            }
        }
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
        console.log("10_ cambiar el año de publicion del libro");
    };
    return GestorLibros;
}());
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log("tu nombre es:" + userName);
