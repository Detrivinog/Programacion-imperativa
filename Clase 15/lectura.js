const fs = require("fs")
const datosJSON = fs.readFileSync("AUTOS.json")
let datos = JSON.parse(datosJSON)

const leerJson = function(nombreArchivo){
    return JSON.parse(fs.readFileSync(nombreArchivo))
}

console.log(leerJson("AUTOS.json"))

const escribirJson = function(nombreArchivo, datos){
    let datosString = JSON.stringify(datos)
    return fs.writeFileSync(nombreArchivo, datosString)
}

let datosPrueba = {
    "marca": "Dodge2",
    "modelo": "Caravan2",
    "anio": 2001,
    "precio": 317621,
    "patente": "RDH1302",
    "vendido": true
}

console.log(escribirJson("AUTOS.json", datosPrueba))

const jsonHelper = {
    leerJson: function (nombreArchivo) {
    return JSON.parse(fs.readFileSync(nombreArchivo))
    },
    escribirJson: function (nombreArchivo, datos) {
        return fs.writeFileSync(nombreArchivo, JSON.stringify(datos))
    },
}

module.exports = jsonHelper
