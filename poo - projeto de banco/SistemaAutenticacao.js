/*
Ser autenticavel significa ter o método 'autenticar'

duck type
*/

export class SistemaAutenticacao{
    static login (autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return `${autenticavel.nome} Esta logado: ${autenticavel.autenticar(senha)}`
        }
        return `teste: ${false}`
    }

    static ehAutenticavel (autenticavel){
        return 'autenticar' in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}
