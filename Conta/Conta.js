// Para que possamos reaproveitar código entre diferentes classe, podemos criar um classe que seja um nível acima daas contas
// No entanto, a classe conta não deve ser isntanciada, pois ela serve como central para as contas Corrente e Poupanca, então tornamos ela Abstrata, ela só pode ser herdada, não instanciada


export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ('Você não deveria instanciar um objeto do tipo Conta Diretamente, pois esta é uma classe abstrata')
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente (novoValor){

        //Aqui precisamos verificar se meu novoValor é do mesmo tipo de Cliente, se é da mesma instância
        // Caso eu passe um valor para .cliente = 0, por exemplo, ele envia como  um undefined
        if(novoValor instanceof Cliente){

            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    // Método abstrato, não deve ser chamado caso não seja declarado em outra classe filha
    sacar(valor){
        throw new Error("O método sacar da Conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa*valor
        if(this.saldo >= valorSacado){
            this._saldo -= valor
            return valor
        }
        return 0;
    }
    

    depositar(valor){
        
        // Aqui utilizamos uma técnica de Early Return, em que ficas mais legível ver o retono de uma função, ao invés de criar uma condição com o que deve acontecer, criamos uma de o que não deve acontecer. Dessa forma, o retorno esperado não fica dentro das identações e condições.
        if(valor <= 0){
            return
        }

        this._saldo += valor
    }
    
    transferir(valor, conta){
        
        const valorSacado = this.sacar(valor)

        conta.depositar(valorSacado)
    }
}