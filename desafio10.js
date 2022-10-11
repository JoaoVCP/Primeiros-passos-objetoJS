//Extrair uma listagem de clientes apenas as informacoes de dependentes e montar uma lista unica, para analise de outros departamentos
//do banco

const clientes = [
    {
        nome: "Andre",
        cpf: "17655455",
        dependentes: [ {
            nome:"Sara",
            parentesco: "filha",
            dataNasc: "23/03/2011"
            },
            {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
            }],
    },
    {
        nome: "Sofia",
        cpf: "213157678987453",
        dependentes: [ {
            nome:"Leandro",
            parentesco: "filho",
            dataNasc: "03/08/2004"
            }],
    }
]

//sintese de espalhamento (spread operator)
const listaDeDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDeDependentes);
console.log(listaDeDependentes);