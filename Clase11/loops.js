//
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function convertirAMayusculas(array){
    let resultado = []
    for (let index = 0; index < array.length; index++){
        resultado[index] = array[index].toUpperCase()
    }
    return resultado
}

console.log(convertirAMayusculas(peliculas))

function pasajeDeElementos(array1, array2){
    for(let index = 0; index < array2.length; index++){
        array1.push(array2[index].toUpperCase())
    }
}

let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

pasajeDeElementos(peliculas, animadas)
console.log(peliculas)

animadas.pop()

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa){
    let comparacion = []
    for(let i = 0; i < asia.length; i++){
        comparacion[i] = asia[i] == europa[i]
    }
    return comparacion
}

console.log(compararCalificaciones(asiaScores, euroScores))