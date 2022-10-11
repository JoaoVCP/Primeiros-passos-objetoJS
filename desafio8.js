//Percorrer um objeto e extrair informacoes basicas do cliente em um formato mais legivel
//e de forma automatizada para fornecer a outros departamentos do banco

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

//metodo For ... in
let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `;
    }
}

console.log(relatorio);