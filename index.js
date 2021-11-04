// Maneira como se importa os módulos, uma vez que já foram exportados

import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

//Naturalmente, o node executa um código js como um script padrão, para rodar como um módulo, devemos colocar o 'type : module' no package.json


//É possível criar o cliente de maneira dentro da classe conta
const cliente1 = new Cliente("Ricardo", 11122233309)

const cliente2 = new Cliente('Alice', 88822233309)

let numeroDeContas

const contaCorrenteRicardo = new ContaCorrente(cliente1, '1001')

const contaCorrenteAlice = new ContaCorrente(cliente2, '1001')

console.log("=============Início da análise=========")
console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)

console.log("=============Depósito===============")
contaCorrenteRicardo.depositar(700)
contaCorrenteAlice.depositar(300)
console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)

console.log("==========Transferir===========")
contaCorrenteRicardo.transferir(200, contaCorrenteAlice)
console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)

// Como é um atributo estático eu devo chamar a classe no geral, não somente uma classe específica
console.log(ContaCorrente.numeroDeContas)