//Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, enviar uma mensagem
//de oferta de seguro

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

// console.log(propsClientes);

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj); //retorna as chaves dos objetos
    if(propsClientes.includes("dependentes")){ //sempre retorna true ou false aqui
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } 
}

console.log(Object.entries(cliente)) //retorna tudo
console.log(Object.values(cliente)) //tem uma funcao pra trazer os valores
oferecerSeguro(cliente)