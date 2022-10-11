//Compondo um objeto - Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com",
    fones: ["55999865465554","55654512455245"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "filha",
    dataNasc: "23/03/2011"
}

console.log(cliente);

//trocando com notacao de pontos
cliente.dependentes.nome = "Pedro";
console.log(cliente);