
function mostrarMensaje<T>(parametro: T) {
    return parametro
}

console.log(mostrarMensaje("Hola que tal").replace("Hola", "Saludos"));
console.log(mostrarMensaje(25).toFixed(5));
console.log(mostrarMensaje(true));