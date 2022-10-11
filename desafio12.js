//Aproveitar o cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupanca

function cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new clientePoupanca("Ju", "621645954", "ju@gmail.com", 200, 366);

console.log(ju);

//Aprendendo a fazer o deposito na poupanca
clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(30);
console.log(ju.saldoPoup);