"use strict";
// objetos ts
let empresa = {
    nombre: "MICROSOFT INK",
    sector: "Informática",
    servicios: ["Sistemas operativos", "ofimática", "consolas"],
    facturacion: 55000000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
};
/* empresa = {
    nombre: "hola",
    sector: "hola",
    servicios: ["hola"],
    facturacion: 25
} */
console.log(empresa);
