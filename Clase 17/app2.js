const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");


let primerosCincoProfesionales = arrayProfesionales.slice(0,4)
console.log(primerosCincoProfesionales)