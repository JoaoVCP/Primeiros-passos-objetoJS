//1 Desafio - Acessar um objeto com informações de um cliente e exibir essas informações no console

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com"
}

// console.log(cliente.nome);
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`); //usando template string
console.log(cliente.cpf.substring(0, 3)); //comeca no 0 e para no indice 3

