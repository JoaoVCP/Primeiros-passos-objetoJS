//3) Adicionar informacoes importantes que ainda estao faltando, como telefone e tambem seus valores
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com"
}

console.log(cliente); //verificando que foi adicionado a chave telefone
cliente.fone = "999354654";
console.log(cliente);

//alterando a chave telefone
cliente.fone = "8755556455";
console.log(cliente);

//deletando
delete cliente.fone;
console.log(cliente.fone); //retornara undefined - da certo fazendo delete cliente["fone"];