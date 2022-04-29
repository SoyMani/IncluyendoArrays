alert("Hola que tal, estas listo para iniciar con tu lista de compras?")

class Item{
    constructor(nombre, precioUnidad, cantidad){

        this.nombre = nombre;
        this.precioUnidad = parseFloat(precioUnidad);
        this.cantidad = parseFloat(cantidad);        
    }
}

const entrada1 = new Item ((prompt("Que compraste?")),(prompt("Cuanto cuesta cada uno?")),
(prompt("Cuantos compraste?")))
const entrada2 = new Item ((prompt("Que compraste?")),(prompt("Cuanto cuesta cada uno?")),
(prompt("Cuantos compraste?")))
const entrada3 = new Item ((prompt("Que compraste?")),(prompt("Cuanto cuesta cada uno?")),
(prompt("Cuantos compraste?")))

let compras = [entrada1,entrada2,entrada3];

for(let i=0; i<compras.length; i++){
    console.log(`${compras[i].nombre} - ${compras[i].precioUnidad} - ${compras[i].cantidad}`)
    compras[i] = compras[i].precioUnidad * compras[i].cantidad
    console.log("Total antes de impuesto");

    console.log(compras[i])
    compras[i] = compras[i] * 1.16
    console.log("Total despues de impuesto");

    console.log(compras[i])
}

