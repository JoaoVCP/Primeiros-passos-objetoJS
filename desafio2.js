//2) Consultar um objeto utilizando uma lista de chaves relativas a informacoes de clientes
//gerada pelo sistema e printar o resultado na tela

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];
// console.log(cliente[chaves[0]]);

//tem uma funcao callback 
//forEach lista e percorre o que tera no vetor
chaves.forEach(info => console.log(cliente[info]));