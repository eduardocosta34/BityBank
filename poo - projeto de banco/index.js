import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { Conta } from "./conta/Conta.js";
import { ContaSalario } from "./conta/contaSalario.js";

// cliente 1 //
const cliente1 = new Cliente('Eduardo', 13245852544, '123');
const contaCorrenteEduardo = new ContaCorrente(cliente1);

// cliente 2 //
const cliente2 = new Cliente('Alice', 85674215486, '123');
const contaCorrenteAlice = new ContaCorrente(cliente2);

// cliente 3 //
const cliente3 = new Cliente('Andre', 95785632487, '123');
const contaPoupancaAndre = new ContaPoupanca(cliente3); // toda conta poupança começa com um saldo inicial de 50,00

// cliente 4 //
const cliente4 = new Cliente('Ronaldo', 74351254488, '123');
const contaSalarioRonaldo = new ContaSalario(cliente4)

// contaPoupancaAndre.sacar(20)
// console.log(contaPoupancaAndre);

contaSalarioRonaldo.depositar(200)
contaSalarioRonaldo.sacar(100)
console.log('saldo conta Ronaldo: ', contaSalarioRonaldo.saldo);









// aprensemtará erro pois não se pode criar uma conta a partir do método 'Conta'
// const conta = new Conta(0, cliente4);
// console.log(conta); 




// contaCorrenteEduardo.depositar(600);

// operações de deposito e de saque: //
// console.log(`saldo na conta de ${cliente1.nome}: ${contaCorrenteEduardo.saldo}`);
// contaCorrenteEduardo.depositar(100);
// const valorSacado = contaCorrenteEduardo.sacar(30);
// console.log(`valor sacado: ${valorSacado}`);

// contaCorrenteAlice.depositar(200)

// contaCorrenteAlice.transferir(50, contaCorrenteEduardo);

// console.log(`saldo na conta de ${contaCorrenteEduardo.cliente.nome}: ${contaCorrenteEduardo.saldo}`);
// console.log(`saldo na conta de ${contaCorrenteAlice.cliente.nome}: ${contaCorrenteAlice.saldo}`);

// console.log('Quantidade de contas correntes cadastradads em nosso banco: ', ContaCorrente.numeroDeContas)

// console.log(contaCorrenteAlice);
// console.log(contaCorrenteEduardo);

// contaCorrenteEduardo.depositar(200.50)



// contaCorrenteEduardo.sacar(100)
// console.log(contaCorrenteEduardo);


// console.log('Saldo da conta corrente de Eduardo:',contaCorrenteEduardo.saldo);
