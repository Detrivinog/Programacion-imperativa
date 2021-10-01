let arrayProfesionales = require('./profesionales.json');

const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}

/*Utilizar un método de array que retorne los primeros 5 profesionales del arrayProfesionales, no debe modificar él array original, él resultado de este método asignar a una variable primerosCincoProfesionales luego hacer la impresión de la misma*/
let primerosCincoProfesionales = arrayProfesionales.slice(0,5);
//console.log(primerosCincoProfesionales);

/*Utilizar un método de array que nos permita reemplazar el profesional con id 14 por un nuevoProfesional, es decir se modificará él arrayProfesionales, luego imprimir él mismo para verificar él cambio.*/
let reemplazar = arrayProfesionales.map(function(profesional) {
    if (profesional.identificador === 14) {
        profesional = nuevoProfesional;
    }
    return profesional;
});
console.log(reemplazar);

/*Ahora necesitamos un método para ordenar el arrayProfesionales de según la propiedad honorarioConsulta de menor a mayor, mostrar él array ordenado*/
let ordenarProfesionales = arrayProfesionales.sort(function(a, b) {
    return a.honorarioConsulta - b.honorarioConsulta;
});
//console.log(ordenarProfesionales);

/*Utilizar un método para realizar una búsqueda sobre él arrayProfesionales del profesional con identificador 15,es decir, que retorne solo un profesional. Asignar este resultado a una variable luego realizar la impresión de la misma.*/
let buscarProfesional = arrayProfesionales.find(function(profesional) {
    return profesional.identificador === 15;
});
//console.log(buscarProfesional);

//[0 , 5)



let numeros = [2, 4, 6];
let elDoble = numeros.map(function(x){
 return x * 2;
});
//console.log(elDoble);

let nombres = ["David", "Juan", "Monica", "Gisel"]
let mayusculas = nombres.map(function(nombre){
    console.log(nombre.toUpperCase())
})


//console.log(mayusculas)
//console.log(2*3)
//mayusculas
//console.log(typeof mayusculas)