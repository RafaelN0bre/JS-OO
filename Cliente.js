// Aqui estarei exportando a classe, para poder utilizar em outros arquivo que eu estiver importando
export class Cliente {
    //Aqui temos os atributos da nossa classe
    nome;
    //Também queremos que o cpf seja único, e quero apenas altear uma vez, no momento de contrução do meu sistema
    #cpf;

    get cpf(){
        return this.#cpf
    }


    //Toda vez que chamamos uma função, ela executa um construtor, até então não estava fazendo nada
    constructor(nome, cpf){
        this.nome = nome
        this.#cpf = cpf
    }
    
}