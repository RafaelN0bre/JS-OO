export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static ehAutenticavel(autenticavel){
        // Aqui procurarmos a chave autenticar dentro do Objeto, porém devemos garantir que é uma função e não só um atributo
        return ("autenticar" in autenticavel) && (autenticavel.autenticar instanceof Function)
    }
}