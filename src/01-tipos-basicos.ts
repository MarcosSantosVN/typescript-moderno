// Tipos de datos básicos
let texto: string = "Hola que tal?";

let numero: number = 25;
numero = 12.5;

let verdadero: boolean = true;
verdadero = false;

let normal: any = "cualquier cosa";
normal = true;
normal = 5;

let persona: string = "Marcos";
persona = "David";
//Con el modo stricto activado no se puede hacer esto
//persona = null o undefined;

let cualquiera: unknown = "Soy un texto";
cualquiera = true;
cualquiera = 1;

if (typeof cualquiera === "number") {
    let mi_numero: number = cualquiera;

    console.log(mi_numero);
}


