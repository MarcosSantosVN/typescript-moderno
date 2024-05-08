"use strict";
;
// Clase
class Fifa {
    constructor(titulo, categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    }
    actualizar(consola) {
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }
}
let fifa23 = new Fifa("fifa 23", "Futbol", 5, 25, true);
console.log(fifa23.mostrar());
// Interfaz objeto literal
let gta = {
    titulo: "GTA V",
    categoria: "Acción",
    edad: 18,
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    },
    actualizar(consola) {
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }
};
console.log(gta);
