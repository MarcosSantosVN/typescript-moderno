"use strict";
// Tipos de datos básicos
let texto = "Hola que tal?";
let numero = 25;
numero = 12.5;
let verdadero = true;
verdadero = false;
let normal = "cualquier cosa";
normal = true;
normal = 5;
let persona = "Marcos";
persona = "David";
//Con el modo stricto activado no se puede hacer esto
//persona = null o undefined;
let cualquiera = "Soy un texto";
cualquiera = true;
cualquiera = 1;
if (typeof cualquiera === "number") {
    let mi_numero = cualquiera;
    console.log(mi_numero);
}
