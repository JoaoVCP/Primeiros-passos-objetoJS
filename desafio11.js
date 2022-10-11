//Gerar uma funcao que permita a criacao de novos clientes a partir de um modelo

function cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const andre = new cliente("André", "263216456", "andre@gmail.com",100); //o new e uma nova instancia, palavra reservada

console.log(andre);