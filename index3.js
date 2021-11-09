import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor ("Rodrigo", 1000, 12345678900)
const gerente = new Gerente ("Ricardo", 5000, 12345678901)

diretor.cadastrarSenha("dsenha123")
gerente.cadastrarSenha("gsenha123")
const diretorestalogado = SistemaAutenticacao.login(diretor, "dsenha123")
const gerenteestalogado = SistemaAutenticacao.login(gerente, "gsenha123")

const cliente = new Cliente("Laís",  798989898, "senha33")

const clienteestalogado = SistemaAutenticacao.login(cliente, "senha33")

console.log(clienteestalogado)
