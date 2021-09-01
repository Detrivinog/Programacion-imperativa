// Repaso logico
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

let str = "un string cualquiera"
grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
"123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

// Punto 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

// Punto 2
function pasarMayuscula(arreglo){
    let arregloModificado = []
    for(let index = 0; index < arreglo.length; index++){
        arregloModificado[index] = arreglo[index].toUpperCase()
    }
    return arregloModificado
}

// Punto 3

let peliculasMayusculas = pasarMayuscula(peliculas)
console.log(peliculasMayusculas)

// Punto 4
let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let animadasModificadas = pasarMayuscula(animadas)
console.log(animadasModificadas)

let animadasEliminado = animadasModificadas.pop()
console.log(animadasEliminado)

for(let index = 0; index < animadasModificadas.length; index++){
    peliculasMayusculas.push(animadasModificadas[index])
}

console.log(peliculasMayusculas)

// Punto 5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(array1, array2){
    let resultadoComparacion = []
    for (let index = 0; index < array1.length; index++){
        resultadoComparacion[index] = array1[index] === array2[index]
    }
    return resultadoComparacion
}

let resultado = compararCalificaciones(asiaScores, euroScores)
console.log(resultado)