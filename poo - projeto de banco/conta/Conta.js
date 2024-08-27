// classe abstrata 
export class Conta{
  
    constructor(saldo, cliente, agencia){

        if(this.constructor == Conta){
            throw new Error("`você não pode criar um objeto tipo conta diretamente`");
        }

        this._saldo = saldo;
        this._cliente = cliente;
        this.agencia = agencia
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    set saldo(novoSaldo){
        this._saldo = novoSaldo
    }

    get saldo(){
        return Number(this._saldo.toFixed(2));
    }

    depositar(valor){
        if(valor >= 0){
            this._saldo += valor;
            console.log(`${this.cliente.nome}: Deposito de ${valor} realizado com sucesso --- valor da conta atualizado: ${this._saldo}`)
            return valor;
        }else{
            console.error('valor invalido')
        }
    }

    sacar(){
        throw new Error("O método sacar da conta é abstrato, ele precisa ser definido");
    }


    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log(`${this.cliente.nome}: valor sacado com sucesso: ${valor} -- saldo atual ${this._saldo.toFixed(2)}`)
            return valorSacado;
        }else{
            console.log('saldo insuficiente')
        }
        return 0;
    }

    transferir(valor, conta){
        if(valor <= this._saldo){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado)
            console.log(`Transferência de ${valor} realizado com sucesso para ${conta.cliente.nome}!!`)
        }else{
            console.log('Saldo insuficiente para transferência');
            
        }
    }
}
