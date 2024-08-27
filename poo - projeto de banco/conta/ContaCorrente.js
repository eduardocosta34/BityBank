import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0

    constructor(cliente){
        let saldo = 0
        super(saldo, cliente, 1001);
        ContaCorrente.numeroDeContas += 1
    }

    //sobreescrevendo o comportamento de sacar 
    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor, taxa)
    }
}