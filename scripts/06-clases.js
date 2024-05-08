"use strict";
class Coche {
    /* marca: string;
    modelo: string;
    year: number;
    color: string;
    arrancado: boolean;
    velocidad: number;

    constructor() {
        this.marca = "Renault";
        this.modelo = "Clio";
        this.year = 2000;
        this.color = "rojo";
        this.arrancado = false;
        this.velocidad = 0;
    }

    constructor(marca:string, modelo:string, year:number, color:string, arrancado:boolean, velocidad:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
    } */
    // public: accesible desde cualquier parte
    // protected: accesible desde dentro de la clase y las clases hijas
    // private: accesible desde dentro de esta clase
    constructor(marca, modelo, year, color, arrancado = false, velocidad = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
    }
    arrancar() {
        this.velocidad = 100;
        this.arrancado = true;
    }
    apagar() {
        this.arrancado = false;
    }
    mostrarCoche() {
        return this.marca + " " + this.modelo;
    }
    mostrarCualidades() {
        return this.year + " " + this.color;
    }
    mostrarTodo() {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }
    set darColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    static saludar() {
        return "Hola que tal";
    }
}
class Camioneta extends Coche {
    constructor(marca, modelo, year, color) {
        super(marca, modelo, year, color);
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }
    arrancar() {
        this.velocidad = 250;
        this.arrancado = true;
    }
    mostrar() {
        super.arrancar();
        return this.arrancado;
    }
}
let mi_camioneta = new Camioneta("Jeep", "nose", 1990, "Negro");
console.log(mi_camioneta.mostrar(), mi_camioneta);
/* let mi_coche: Coche = new Coche("Renault", "Clio", 2000, "rojo");
mi_coche.arrancar();
mi_coche.darColor="Azul";

console.log(mi_coche.mostrarTodo());

console.log(Coche.saludar(); */ 
