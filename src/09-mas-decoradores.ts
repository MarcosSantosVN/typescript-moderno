function modmen(mostrar: boolean) {
    return function info(target: Object, propertyKey: string, descriptor: any) {
        if (mostrar) {
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        } else {
            descriptor.value = function () {
                console.log("Método bloqueado");
            }
        }
    }
}

/* function info(target: Object, propertyKey: string, descriptor: any) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
} */

function miPropiedad(target: Object, propertyKey: string, parameterIndex:number) {
    console.log("Esta propiedad está en la clase " + target.constructor.name + " y la posicion del parametro es " + parameterIndex)
}

class Ordenador {

    marca: string = "Asus";

    @modmen(false)
    encender(@miPropiedad mensaje: string) {
        console.log("Encendiendo...");
        console.log(mensaje);
    }
}

let pc = new Ordenador();
pc.encender("Iniciando sesión en el PC de Marcos");