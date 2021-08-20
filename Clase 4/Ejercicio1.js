// Mensaje con variables

let nombre = "David"
let edad = 26
let birthday = "6 de julio"
let ciudad = "Tocancipá"
let ocupacion = "Científico de datos"
let hobbie = "Montar bicicleta"

console.log("Mi nombre es " + nombre + ". Mi edad es " + edad + " años")

let a = 1, b = "Esteban", c = 4 

// Calculadora de edad

let edadCarlos = 29
let edadMaria = 35

console.log("Edad de Carlos: " + edadCarlos*365 + " días")
console.log("Edad de Maria: " + edadMaria*365 + " días")

// Suma de valores

let num1 = 14
let num2 = 24
let resultado = num1 + num2

console.log("Suma de variables es " + resultado)

// Calculador de abastecimiento de por vida

edad = 26
let edadMaxima = 89
let snackFav = "Tostacos picantes"
let snacksDia = 2
let snacksRestantes = (edadMaxima - edad)*snacksDia*365
let precioSnack = 4000

console.log("Vas a necesitar " + snacksRestantes + " para que te alcances hasta los " + edadMaxima + " años.")
console.log("Vas a gastar " + snacksRestantes*precioSnack + " pesos en tostacos picantes")

// Calcularo de IMC

let nicolas = {nombre: "Nicolás", apellido: "López", edad: 27, peso: 83.5, altura: 1.70, prepaga: true}
let esteban = {nombre: "Esteban", apellido: "Piazza", edad: 28, peso: 80.1, altura: 1.76, prepaga: true}
let jose = {nombre: "José", apellido: "Fermoso", edad: 33, peso: 63.7, altura: 1.53, prepaga: false}
let juana = {nombre: "Juana", apellido: "Fernández", edad: 26, peso: 55 , altura: 1.62, prepaga: true}

function imc (nombre){
    return Math.round(nombre.peso / (nombre.altura*nombre.altura))
}

console.log(nicolas.nombre + " tiene " + imc(nicolas))
