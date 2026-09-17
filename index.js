import Descritor from "./src/descritorEmpresa.js";
import Empresa from "./src/empresa.js";
import Endereco from "./src/endereco.js";
import Funcionario from "./src/funcionario.js";
import Telefone from "./src/telefone.js";

let endereco = new Endereco(123, 'Av Mario Cola', 'Santa Cruz', 'São Paulo');
let telefone = new Telefone('011', '4-3333-3333');
let funcionario = new Funcionario('João Pedro', '123456789', '111.222.333-44', endereco, telefone);

let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa(funcionarios, endereco, 'ANT LTDA', 'Antena online', '786-238-716-373-96', telefones);

let descritor = new Descritor();
descritor.descrever(empresa);