// Competencia

const alicia = [23, 67, 32];
const bob = [12, 67, 43];

function encontrarGanador(comp1, comp2){
    let puntosComp1 = 0
    let puntosComp2 = 0

    for (let index = 0; index < comp1.length; index++){
        if (comp1[index] > comp2[index]){
            puntosComp1 = puntosComp1 + 1
        } else if(comp1[index] < comp2[index]){
            puntosComp2 = puntosComp2 + 1
        } 
    }

    return (puntosComp1 > puntosComp2) ? 
    "Alicia" : (puntosComp1 < puntosComp2)? 
    "Bob" : 
    "Nadie gano"
}

console.log(encontrarGanador(alicia, bob))
let comparacion = [2, 313, "b"] > [2, 313, "a"]
console.log(comparacion)

// Retos

let digitalHouse = (num1, num2) => {
    for(let numero = 1; numero <= 100; numero++){
        if (numero % num1 == 0 && numero % num2 != 0){
            console.log("Digital")
        } else if (numero % num1 != 0 && numero % num2 == 0){
            console.log("House")
        } else if (numero % num1 == 0 && numero % num2 == 0){
            console.log("Digital House")
        } else {
            console.log(`${numero}`)
        }
    }
}

//digitalHouse(33, 15)

let sumArray = (array) => {
    let suma
    for(let i = 0; i < array.length; i++){
        if( i == 0  && typeof array[i] == 'number'){
            suma = 0
        } else if(i == 0  && typeof array[i] == 'string'){
            suma = ""
        }
        suma += array[i]
    }

    return suma
}

console.log(sumArray([1, 3, 5, 7]))
console.log(sumArray([0, 0, 0, "hola"]))
console.log(sumArray(["hola", "David"]))

console.log(typeof "")


// Repaso con Ana

let personajes = ["nemo", "batman", "ironman"];
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella", ["nemo", "batman", "ironman"]]

console.log(typeof peliculas[5])

function convertirAMayusculas(arreglo) {
    for (let repe=0; repe<arreglo.length;repe++) {
        console.log(`Repe es igual a ${repe} y elemento es ${arreglo[repe]}`)      
        if (typeof arreglo[repe] == "object"){
            console.log(`Si es un objeto en la posición ${repe}`)          
            for (let index = 0; index < arreglo[repe].length; index++){
                console.log(`Repe es igual a ${repe} y elemento es ${arreglo[repe]}`)
            arreglo[repe][index] = arreglo[repe][index].toUpperCase()
            console.log(`Arreglo[repe][index]: repe ${repe}, index ${index}, el elemento ${arreglo[repe][index]}`)
          }

      } else {
         console.log(`No es un objeto en la posición ${repe}`)
         arreglo[repe] = arreglo[repe].toUpperCase()
         console.log(`Arreglo[repe]: repe ${repe} el elemento ${arreglo[repe]}`)
      }
     console.log(`Repe final es ${repe}`)
    } 
  return arreglo
}

console.log("hola"[0])
console.log(convertirAMayusculas(peliculas))

// let number = 123
// "STAR WRAS" = number
// console.log(number)