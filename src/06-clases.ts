abstract class Coche {
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

    constructor(
        public marca: string,
        public modelo: string,
        public year: number,
        protected color: string,
        protected arrancado: boolean = false,
        protected velocidad: number = 0
    ) { }

    public arrancar(): void {
        this.velocidad=100;
        this.arrancado = true;
    }

    public apagar(): void {
        this.arrancado = false;
    }

    private mostrarCoche(): string {
        return this.marca + " " + this.modelo;
    }

    private mostrarCualidades(): string {
        return this.year + " " + this.color;
    }

    public mostrarTodo(): string {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }

    public set darColor(color: string) {
        this.color = color;
    }

    public get getColor() {
        return this.color;
    }

    static saludar(): string {
        return "Hola que tal";
    }
}

class Camioneta extends Coche {
    constructor(
        public marca: string,
        public modelo: string,
        public year: number,
        protected color: string
    ) {
        super(marca, modelo, year, color)
    }

    public arrancar() {
        this.velocidad = 250;
        this.arrancado = true;
    }

    public mostrar() {
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