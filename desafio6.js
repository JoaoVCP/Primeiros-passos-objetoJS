//Verificar a melhor forma de agregar a informacao de um novo dependente ao objeto Cliente

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com",
    fones: ["55999865465554","55654512455245"],
    dependentes: [{
        nome:"Sara",
        parentesco: "filha",
        dataNasc: "23/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente);
console.log(cliente.dependentes[1]);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);