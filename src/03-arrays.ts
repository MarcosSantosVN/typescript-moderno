// Array
let personas: string[] = ["Marcos", "Paco", "Fran"];
personas.push("David");

let years: number[] = new Array(2000, 2001, 2002);
years.push(2005);

console.log(personas, years);

// Tuplas
let pelicula: [string, boolean, number] = ["Batman Begins", true, 1990];

console.log(pelicula.length);

// Enum - enumeracion
enum DatosPersonales {
    nombre = "Marcos",
    dni = 45876,
    direccion = "Mi calle",
    ciudad = "Badajoz"
};

console.log(DatosPersonales.nombre, DatosPersonales.dni)

// Cast o convertir a otro tipo
let valor_desconcido: any = 132465789;
let frase_final: string = <string>valor_desconcido;

console.log(frase_final);