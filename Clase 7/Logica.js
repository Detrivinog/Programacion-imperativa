/// Parte 1

console.log(!!1) // true

let x = 5
let y = 9

console.log(x < 10 && x!==5) // false
console.log(x>9 || x===5) // true
console.log(!(x===y)) // true

let str = ""
let msj = "jaja!"
let esGracioso = "false"
console.log(!((str || msj) && esGracioso)) //false


x=3
y=8
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y)) //false

// Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura debe ser mayor a 1,30 m.
let edad = 13
let altura = 1.4

//let entrada = edad > 12 && altura > 1.30
//console.log("La entrada es " + entrada)

// Declarada
function entrada(edad, altura){
    return edad > 12 && altura > 1.30
}

console.log(`La entrada es ${entrada(12, 1.5)}`)
console.log(`La entrada es ${entrada(14, 1.5)}`)

// Expresada
let entrada2 = function(edad, altura) {
    return edad > 12 && altura > 1.30
}

console.log(`La entrada es ${entrada2(12, 1.5)}`)
console.log(`La entrada es ${entrada2(14, 1.5)}`)

// Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos debe usar el flash.

let usarFlash = function(luz, movimiento){
    return luz == "baja" || movimiento == "rapido"
}

console.log("Usar flash"+ " " + usarFlash("baja", "lento"))
console.log("Usar flash "+ usarFlash("alta", "lento"))

//Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones parciales, o si obtiene un 4 en el examen final.

let aprobar = function(notaParcial1, notaParcial2,notaFinal){
    return (notaParcial1 > 7 && notaParcial2 >7) || (notaFinal >= 4)
}

console.log(`Abrobar la materia ${aprobar(7,6,4)}`)
console.log(`Abrobar la materia ${aprobar(7,6,3)}`)

//Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus prácticas de piano y lo hizo de memoria.

let verTele = function(tarea, piano, memoria){
    return tarea && (piano && memoria)
}

console.log(`Dejar ver la TV ${verTele(true, true, false)}`)
console.log(`Dejar ver la TV ${verTele(true, true, true)}`)

console.log("foca">"foco")