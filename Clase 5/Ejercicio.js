// pulgadas a centimetros
function pulgadasCentimetros (pulgadas){
    return pulgadas * 2.54
}

console.log(pulgadasCentimetros(3))

// string a URL

function crearURL (texto) {
    return `http://www.${texto}.com`
}

console.log(crearURL("pollosamarillos"))

// edad de perros

function edadPerros (edad) {
    return edad * 7
}

console.log(edadPerros(4))

// A mayusculas
function convertirAMayusculas (texto){
    return texto.toUpperCase();
}

console.log(convertirAMayusculas("pollos amarillos"))

// tipo de dato 
function tipoDeDato(dato) {
    return typeof dato // Es un operador
}

console.log(tipoDeDato(45))
console.log(typeof("dato"))

// Circunferencia

function circunferencia(radio){
    return 2 * radio * Math.PI
}

console.log(circunferencia(1))

// Saludar a la persona

function saludar(nombre) {
    console.log(`hola ${nombre}, tanto tiempo sin verte.`);
}

console.log(saludar("Macarena"))