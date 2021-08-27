//Ejercicios calentamiento

// Es par o impar
esPar = nro => (nro%2) == 0 ? console.log('es par') : console.log('es impar');

esPar(4)

// totalAPagar()

function totalAPagar(vehiculo, litrosConsumidos){
    switch (vehiculo){
        case "coche":
            console.log(`Total a pagar es ${litrosConsumidos > 25 
                ? 86*litrosConsumidos + 25 
                : 86*litrosConsumidos + 50}`)
            break;
        case "moto":
            console.log(`Total a pagar es ${litrosConsumidos > 25 
                ? 70*litrosConsumidos + 25 
                : 70*litrosConsumidos + 50}`)
            break;
        case "coche":
            console.log(`Total a pagar es ${litrosConsumidos > 25 
                ?55*litrosConsumidos + 25 
                : 55*litrosConsumidos + 50}`)
            break;
    }
}

totalAPagar("coche", 10)
totalAPagar("moto", 10)

// Local de Sándwiches 

function precioSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let total = 0
    switch (base){
        case "pollo":
            total = total + 150
            break;
        case "carne":
            total = total + 200
            break
        case "veggie":
            total = total + 100
            break
        default:
            console.log("Entrada erronea de la base del sandwich")
    }
    switch (pan){
        case "blanco":
            total = total + 50
            break;
        case "negro":
            total = total + 60
            break
        case "s/gluten":
            total = total + 75
            break
        default:
            console.log("Entrada erronea del tipo de pan")
    }

    total = total + 20*queso + 15*tomate + 10*lechuga + 15*cebolla + 5*mayonesa + 5*mostaza

    return total
}

console.log("El precio del sandwich es " + precioSandwich('pollo', 'negro', true, true, true, false, false, true))


// Numero secreto

console.log(`${Math.floor(Math.random(1)*10)+ 1}`)

function numeroSecreto(numero){
    let secreto = Math.floor(Math.random(1)*10)+ 1
    return numero == secreto ? console.log("Ganaste"): console.log("No ganaste")
}

numeroSecreto(5)

