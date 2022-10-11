//ADicionar uma propriedade que permita "acoes", para que os clientes que estão cadastrados consigam fazer operacoes bancarias

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "17655455",
    email: "andre@gmail.com",
    fones: ["55999865465554","55654512455245"],
    dependentes: [
        {
            nome:"Sara",
            parentesco: "filha",
            dataNasc: "23/03/2011"},
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,

    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);

