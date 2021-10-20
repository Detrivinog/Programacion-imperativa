const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "David Esteban Triviño GOnzalez";
const tema = "Tema 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./jsonHelper")

// A
let gestionDePeliculas = {
// B
    peliculas: jsonHelper.leerJson('peliculas'),
// C
    listarPeliculas(movies){
        movies.forEach(movie => {
            console.log(`${movie.titulo}, de ${movie.director}.Duración: ${movie.duracion} minutos, ${movie.genero}, (${movie.calificacionIMDB} / 10 en IMDB)`)
        });
    }, 
// D
    buscarPorId(id){
        return this.peliculas.find(movie => movie.id === id) || undefined
    },
//E
    buscarPorGenero(genero){
        let respuesta = this.peliculas.filter(movie => movie.genero == genero)
        return this.listarPeliculas(respuesta)
    },
// F
    filtrarPorCalificacion(min, max){
        let respuesta = this.peliculas.filter(movie => movie.calificacionIMDB >= min && movie.calificacionIMDB <= max)
        if (respuesta === undefined || respuesta.length == 0) {
            return []
        } else {
            return this.listarPeliculas(respuesta)
        }
    },
// G
    ordenarPorDuracion(){
        let respuesta = this.peliculas.sort((a, b) =>b.duracion - a.duracion)
        return this.listarPeliculas(respuesta)
    },
//H
    duracionPromedio(){
        let promedio = this.peliculas.reduce((prev, curr) => prev + curr.duracion, 0)/this.peliculas.length
        return `El promedio de duración de las películas es de: ${promedio} minutos`
    },
// I
    modificarGeneroPorId(id, newGen){
        if (this.buscarPorId(id) === undefined){
            return undefined
        } else{
            let movieSelect = this.buscarPorId(id).genero = newGen
            jsonHelper.escribirJson("peliculas", this.peliculas)
            return console.log(`Cambio exitoso del id ${id}`)
        }
    }

}





// H

// I
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas.slice(0,2))
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorId(1))
console.log('\nCuando es undefined\n')
console.log(gestionDePeliculas.buscarPorId(112)) //Undefined
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
gestionDePeliculas.buscarPorGenero("Comedia")
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
gestionDePeliculas.filtrarPorCalificacion(7,8)
console.log('\nArray vacio al no encontrar calificaciones en el rango dado \n')
console.log(gestionDePeliculas.filtrarPorCalificacion(1,3))
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
gestionDePeliculas.ordenarPorDuracion()
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionPromedio())
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorId(1))
gestionDePeliculas.modificarGeneroPorId(1, "Drama")
console.log(gestionDePeliculas.buscarPorId(1))
console.log(o);
