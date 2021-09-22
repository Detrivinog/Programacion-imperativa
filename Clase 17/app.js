const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A
arrayProfesionales.forEach(profesional => {
    console.log(`${profesional.nombre} - ${profesional.especialidad}`)    
});
//B
arrayProfesionales.map(function(profesional){
    profesional.honorarioConsulta = profesional.honorarioConsulta*1.05
})

//console.log(arrayProfesionales)
//C
let profesionalesDeshabilitados = arrayProfesionales.filter(function(profesional){
    return profesional.estaHabilitado == false
})

//console.log(profesionalesDeshabilitados)
//D
let profesionalesHabilitados = arrayProfesionales.filter(function(profesional){
    return profesional.estaHabilitado == true
})

//console.log(profesionalesHabilitados)

//E
let arquitectos = arrayProfesionales.filter(function(profesional){
    return profesional.especialidad == 'Arquitecto'
})

//console.log(arquitectos)

//F
profesionalesDeshabilitados.map(function(deshabilitado){
    deshabilitado.estaHabilitado = true
})
//console.log(profesionalesDeshabilitados)

//G 
let cantidadTotalConsultas = arrayProfesionales.reduce(function(acum = 0, profesional){
    return acum + profesional.cantidadConsultas
})
console.log(cantidadTotalConsultas)
//H 