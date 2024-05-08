// objetos ts

/* let empresa: {
    nombre: string,
    sector: string,
    servicios: string[],
    facturacion: number
} = {
    nombre: "MICROSOFT INK",
    sector:"Informática",
    servicios: ["Sistemas operativos", "ofimática", "consolas"],
    facturacion: 55_000_000_000 */

type empresa = {
    nombre: string,
    sector: string,
    servicios: string[],
    facturacion: number,
    mostrar: () => string
}

let empresa: empresa = {
    nombre: "MICROSOFT INK",
    sector: "Informática",
    servicios: ["Sistemas operativos", "ofimática", "consolas"],
    facturacion: 55_000_000_000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
}

/* empresa = {
    nombre: "hola",
    sector: "hola",
    servicios: ["hola"],
    facturacion: 25
} */

console.log(empresa);