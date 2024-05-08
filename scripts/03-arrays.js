"use strict";
// Array
let personas = ["Marcos", "Paco", "Fran"];
personas.push("David");
let years = new Array(2000, 2001, 2002);
years.push(2005);
console.log(personas, years);
// Tuplas
let pelicula = ["Batman Begins", true, 1990];
console.log(pelicula.length);
// Enum - enumeracion
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Marcos";
    DatosPersonales[DatosPersonales["dni"] = 45876] = "dni";
    DatosPersonales["direccion"] = "Mi calle";
    DatosPersonales["ciudad"] = "Badajoz";
})(DatosPersonales || (DatosPersonales = {}));
;
console.log(DatosPersonales.nombre, DatosPersonales.dni);
// Cast o convertir a otro tipo
let valor_desconcido = 132465789;
let frase_final = valor_desconcido;
console.log(frase_final);
