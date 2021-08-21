// Calculadora

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(dividendo, divisor){
    return dividendo/divisor;
}

function cuadradoDeUnNumero(numero){
    return multiplicar(numero, numero)
}

function promedioDeTresNumeros(num1, num2, num3){
    return dividir(sumar(sumar(num1, num2), num3), 3)
}

function calcularPorcentaje(numero, porcentaje){
    return dividir(multiplicar(numero,porcentaje),100)
}

function generadorDePorcentaje(parte, total){
    return multiplicar(dividir(parte,total), 100)
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")
let num1 = 20
let num2  = 10
console.log(`Los numeros a operar son ${num1} y ${num2}`)

console.log("Sumar: " + sumar(num1,num2))
console.log("Restar: " +  restar(num1,num2))
console.log("Multiplicar: " + multiplicar(num1,num2))
console.log("Dividir: " + dividir(num1, num2))
console.log("Dividir por 0: " + dividir(num1, 0))

console.log("Cuadarado de un numero: " + cuadradoDeUnNumero(4))
console.log("Promedio de tres números: " + promedioDeTresNumeros(10, 20, 30))
console.log("Calcular porcentaje: " + calcularPorcentaje(500, 20))
console.log("Generador de porcentaje: " + generadorDePorcentaje(2, 20)+"%")
