// Aqui estarei exportando a classe, para poder utilizar em outros arquivo que eu estiver importando
export class Cliente {
    //Aqui temos os atributos da nossa classe
    // nome; -- Aqui foi comentado pois é uma boa prática declarar os atributos dentro de algum métodos, no caso o de construtor
    //Também queremos que o cpf seja único, e quero apenas altear uma vez, no momento de contrução do meu sistema
    // _cpf;

    get cpf(){
        return this._cpf
    }


    //Toda vez que chamamos uma função, ela executa um construtor, até então não estava fazendo nada
    constructor(nome, cpf, senha){
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }
    
}