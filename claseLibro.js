"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(auxISBN, auxTitulo, auxAutor, auxAnio, auxCategoria, auxEditorial) {
        this.ISBN = auxISBN;
        this.titulo = auxTitulo;
        this.autor = auxAutor;
        this.anioPublicacion = auxAnio;
        this.categoria = auxCategoria;
        this.editorial = auxEditorial;
    }
    Libro.prototype.getISBN = function () {
        return this.ISBN;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (nuevoAutor) {
        this.autor = nuevoAutor;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (nuevoTitulo) {
        this.titulo = nuevoTitulo;
    };
    Libro.prototype.getAnioPublicacion = function () {
        return this.anioPublicacion;
    };
    Libro.prototype.setAnioPublicacion = function (nuevoAnio) {
        this.anioPublicacion = nuevoAnio;
    };
    Libro.prototype.getCategoria = function () {
        return this.categoria;
    };
    Libro.prototype.setCategoria = function (nuevaCategoria) {
        this.categoria = nuevaCategoria;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.SetEditorial = function (nuevaEditorial) {
        this.editorial = nuevaEditorial;
    };
    return Libro;
}());
exports.Libro = Libro;
