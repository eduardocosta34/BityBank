import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Gustavo', 16000, 15675236956)
diretor.cadastrarSenha('gus156')

const gerente = new Gerente('Ricardo', 9000, 75462598764)
gerente.cadastrarSenha('ric754')

const diretorLogado = SistemaAutenticacao.login(diretor, 'gus156')
const GerenteLogado = SistemaAutenticacao.login(gerente, 'ric754')

console.log(diretorLogado);
console.log(GerenteLogado);

// cliente 1 //
const cliente1 = new Cliente('Eduardo', 13245852544, '123');

const clienteLogado = SistemaAutenticacao.login(cliente1, '123')

console.log(clienteLogado);
