import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(cliente){
        let saldoInicial = 50 //toda conta poupança começa com um saldo inicial de 50,00
        super(saldoInicial, cliente, 2002)
    }

    sacar(valor){
        let taxa = 1.03;
        return this._sacar(valor, taxa);
    }
}
