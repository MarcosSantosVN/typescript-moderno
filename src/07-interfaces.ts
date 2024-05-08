interface Videojuego {
    titulo: string;
    categoria: string;
    edad: number;
    duracion?: number;
    lanzado?: boolean;
    mostrar(): void;
    actualizar(consola: string): string;
};

// Clase
class Fifa implements Videojuego {
    constructor(
        public titulo: string,
        public categoria: string,
        public edad: number,
        public duracion?: number,
        public lanzado?: boolean
    ){}

    mostrar():void {
        console.log(this.titulo, this.categoria, this.edad);
    }

    actualizar(consola:string) {
        console.log("buscando actualizaciones...");
        return "Actualizado";
    }

}

let fifa23 = new Fifa("fifa 23", "Futbol", 5, 25, true);
console.log(fifa23.mostrar());

// Interfaz objeto literal
let gta: Videojuego = {
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
}

console.log(gta);