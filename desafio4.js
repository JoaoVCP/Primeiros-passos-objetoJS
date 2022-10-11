//Acessar a lista de numeros de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se ha mais de um numero em algum cadastro

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com",
    fones: ["55999865465554","55654512455245"]
}

cliente.fones.forEach(fone => console.log(fone));

