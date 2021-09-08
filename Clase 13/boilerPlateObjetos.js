//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// podes continuar tu codigo a partir de aca!
let banco = {
  clientes : arrayCuentas,
  consultarCliente(titular){
    for(let i = 0; i < arrayCuentas.length; i++){
      if(this.clientes[i].titularCuenta == titular){
        return this.clientes[i]
      }
    }
  },
  deposito(titular, dinero){
    this.consultarCliente(titular).saldoEnPesos += dinero
    return console.log(`Depósito realizado, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos}`)
  },
  extraer(titular, dinero){
    if (this.consultarCliente(titular).saldoEnPesos < dinero){
      return console.log("Fondos insuficientes")
    } else {
      this.consultarCliente(titular).saldoEnPesos -= dinero
      return console.log(`Extracción realizada correctamente, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos}`)
    }  
  }
}

console.log(banco.consultarCliente("Ramon Connell"))
console.log(banco.deposito("Ramon Connell", 1000))
console.log(banco.extraer("Ramon Connell", 500))

// Bonus extra

let propiedadUnica = function(arreglo, texto) {
  let resultado = []
  for(let i = 0; i < arreglo.length; i++){
    resultado[i] = {
      [texto] : arreglo[i][texto] 
    }
  }
  return resultado
}

let array = [{nombre: "Lean", edad : 27}, {nombre: "Erza", edad:49}]
console.log(propiedadUnica(array, "edad"))
console.log(propiedadUnica(array, "nombre"))

// 




// function arregloDeObjetosDos(numero,texto) {
//   let resultado = []
//   for (let i = 1; i <= numero;i++){
//       let obj = {
//           [texto]: i // considerar los corchetes para tomar el parámetro
//       }
//       resultado.push(obj)
//   }
//   return resultado
// }
// console.log (arregloDeObjetosDos(5,"chau"));





// let unwrap = ({a, c}) => ({a, c});
// let unwrap2 = function({a, c}) { return { a, c }; };
// let picked = unwrap({ a: 5, b: 6, c: 7 });
// let picked2 = unwrap2({a: 5, b: 6, c: 7})

// console.log(picked)
// console.log(picked2)