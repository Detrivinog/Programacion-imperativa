// Consigna clase 22
// Modelando una carrera de autos
// Funciones de lectura y esctiyura de JSON
const fs = require('fs')
const lecturaJSON = (dirFile) => JSON.parse(fs.readFileSync(dirFile))
const escrituraJSON = (dirFile, data) => fs.writeFileSync(dirFile, JSON.stringify(data, null, 2))


let carrera = {
    autos: lecturaJSON("./autos.json"),
    autosPorTanda: 6,
    autosHabilitados(){
        return this.autos.filter(auto => !auto.sancionado)
    },
    listarAutos(arrayAutos){
        console.log(`Piloto: ${arrayAutos.piloto}, patente: ${arrayAutos.patente}, velocidad: ${arrayAutos.velocidad},
        peso en kg: ${arrayAutos.peso}, estado: ${arrayAutos.sancionado ? "sancionda" : "habilitado"}`)
    },
    buscarPorPatente(patente){
        return this.listarAutos(
            this.autos.find(auto => auto.patente == patente) || undefined
            )
    },
    filtrarPorCilindrada(cilindrada){
        return this.listarAutos(
            this.autosHabilitados().filter(auto => auto.cilindrada <= cilindrada)
            )
    },
    ordenarPorVelocidad(){
        return this.listarAutos(
            this.autos.sort((a,b) => a - b)
            )
    },
    habilitarVehiculo(patente){
        let habilitado = autos.buscarPorPatente(patente).sancionado
        habilitado = habilitado ? false : false
        escrituraJSON("./cambios.json", habilitado)
        return this.listarAutos(
            autos.buscarPorPatente(patente)
            )
    },
    generarTanda(cilindrada, peso){
        return this.listarAutos(
                this.filtrarPorCilindrada(cilindrada).filter(auto => auto.peso <= peso).slice(0,6)
            )
    },
    pesoPromedio(){
        let pesos = this.generarTanda().reduce((prev, curr) => [...prev, ...curr.peso] , 0)
        promedio = pesos.reduce((prev, curr) => prev + curr , 0)/pesos.leght()
        return `El peso promedio de la tanda es ${promedio} kg`
    },
    listarPodio(tanda){
        let podio = tanda.sort((a, b) => b.puntaje - a.puntaje).slice(0,3)
        return `El ganador es: ${podio[0].piloto}, con un puntaje de ${podio[0].puntaje}.
        El segundo puesto es para ${podio[1].piloto}, con un puntaje de ${podio[0].puntaje}.
        El tercer puesto es para ${podio[2].piloto}, con un puntaje de ${podio[0].puntaje}.`   
    }
}

// Pruebas
console.log('1. Lectura correcta del archivo\n')
//console.log(carrera.autos)
console.log('********************************\n')
