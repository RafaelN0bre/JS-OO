//Para verificarmos se meu novoValor será do mesmo tipo de Cliente, precisamos importar a classe Cliente
import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    
    // O atributo deve ser compartilhado por todas as contas, então ele deve interagir no total
    static numeroDeContas = 0
    
    

    // O set e o get são acessores, servem para trabalhar com atributos privados
    //Usando os acessores, eu controlo se é possível atribuir valores, se não queremos permitir colocar valores no saldo, mas queremos poder acessà-lo para consulta, fazemos apenas um get.
    
    
    constructor(cliente, agencia){
        // Aqui ele chama o construtor da classe pai
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }

    sacar(valor){
        let taxa = 1.1  
        return this._sacar(valor, taxa)
    }
    
}   

// set cliente (novoValor){

//     //Aqui precisamos verificar se meu novoValor é do mesmo tipo de Cliente, se é da mesma instância
//     // Caso eu passe um valor para .cliente = 0, por exemplo, ele envia como  um undefined
//     if(novoValor instanceof Cliente){

//         this._cliente = novoValor
//     }
// }
// //Ao tornar nosso atributo privado, precisamos de algumas formas para poder acesar esse cliente, de maneira controlada

// get cliente(){
//     return this._cliente
// }

// //Aqui estamos inicializando o saldo como zero, por ser tratar de um atributo privado, não é possível inserir esse valor inicial fora da classe
// _saldo  = 0

// get saldo(){
//     return this._saldo
// }
//Aqui, após extendermos nossa Conta, não é necessário declarar esses métodos novamente
    
    // Para adicionar um método ou atributo em privado, basta colocar uma hashtag antes do nome. Um elemento privado não permite ser alterado fora de dentro da classe, isto é, não se pode por exemplo em algum ponto do código utlizar um contacorrentedocliente.saldo = ---

    // Por muito tempo a convesão era de se criar um atributo privado somente de forma ilsutrativa, adicionando um underline antes do nome.
    // Isso não tornava o elemento privado, apenas para os programadores e a comunidade tratarem ele como privado, e não utilizarem fora da classe
    
    //E quando temos funções dentro de uma classe, criamos um método
    // sacar(valor){
        //     // O this se refere à conta corrente, qualquer que ela seja
        //     if(this._saldo >= valor){
            //         this._saldo -= valor
            
            //         // Aqui determinamos que um método terá uma resposta(um retorno)
            //         // O return também funciona como um break da função, uma vez que a função retorna algo, ela não faz mais nada
            //         return valor
            //     }
            // }
            
            // depositar(valor){
                
                //     // Aqui utilizamos uma técnica de Early Return, em que ficas mais legível ver o retono de uma função, ao invés de criar uma condição com o que deve acontecer, criamos uma de o que não deve acontecer. Dessa forma, o retorno esperado não fica dentro das identações e condições.
                //     if(valor <= 0){
                    //         return
                    //     }
                    
                    //     this._saldo += valor
                    // }
                    
                    // transferir(valor, conta){
                        //     const valorSacado = this.sacar(valor)

    //     conta.depositar(valorSacado)
    // }
