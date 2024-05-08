"use strict";
function saludo(nombre) {
    return "Un saludo para " + nombre;
}
console.log(saludo("Marcos"));
// Nada / void
function mostrarFecha() {
    console.log("29-04-2024");
}
mostrarFecha();
// Never / fin de la aplicacion
function finApp() {
    throw new Error("La aplicacion se ha creado...");
}
//finApp();
console.log("Esto no se debe ver");
// Parmetros funciones
function mostrarPais(pais, continente) {
    let resultado = "Faltan datos";
    if (pais && continente) {
        resultado = pais + " " + continente;
    }
    return resultado;
}
console.log(mostrarPais("España", "Europa"));
// Tipo Funcion
let grupos;
grupos = function (datos) {
    return "Mis grupos favoritos son " + datos.toString();
};
console.log(grupos(["Natos y waor", "La fuga", "Metalica"]));
function tekken(personaje, atuendo) {
    return `El personaje ${personaje} lleva el atuendo ${atuendo}`;
}
console.log(tekken("Tigre", "comprado"));
