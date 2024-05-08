

function proyectar(constructor: Function) {

    constructor.prototype.hacerProyeccion = function (activar:boolean):void {
        if (activar) {
            console.log("Proyectando la pelicula...", this.titulo)
        } else {
            console.log("Cine cerrado X")
        }
    }


}

@proyectar
class Pelicula{
    constructor(
        public titulo: string,
        public genero: string,
        public proyectando: boolean
    ) { }
}

let batman = new Pelicula("Bataman begins", "Acción", false);
(<any>batman).hacerProyeccion(true);