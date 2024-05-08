function saludo(nombre: string): string {
    return "Un saludo para " + nombre;
}

console.log(saludo("Marcos"));

// Nada / void

function mostrarFecha(): void {
    console.log("29-04-2024");
}

mostrarFecha()

// Never / fin de la aplicacion
function finApp(): never {
    throw new Error("La aplicacion se ha creado...")
}

//finApp();

console.log("Esto no se debe ver");

// Parmetros funciones
function mostrarPais(pais?: string, continente?: string): string {
    let resultado: string = "Faltan datos";

    if (pais && continente) {
        resultado = pais + " " + continente
    }

    return resultado;
}

console.log(mostrarPais("España", "Europa"))

// Tipo Funcion
let grupos: (datos: string[]) => string;

grupos = function (datos: string[]) {
    return "Mis grupos favoritos son " + datos.toString();
}

console.log(grupos(["Natos y waor", "La fuga", "Metalica"]));

// Tipo literal
//atuendo: "especial" | 1 | 2 | 3 | 4

// Tipo personalizado o alias
type traje = "especial" | 1 | 2 | 3 | 4 | "comprado";

function tekken(personaje: string, atuendo: traje): string {
    return `El personaje ${personaje} lleva el atuendo ${atuendo}`;
}

console.log(tekken("Tigre", "comprado"));
