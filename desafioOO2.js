//Aproveitar o cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupanca

class Cliente {
    //propriedades da classe
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    //metodos / comportamentos da classe
    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class clientePoup extends Cliente{
    constructor(nome, email, cpf, saldo,saldoPoup){
        super(nome, email, cpf, saldo); //adiciona os parametros da outra classe
        this.saldoPoup = saldoPoup;
    }
    depositarPoup(valor){
        this.saldoPoup += valor;
    }
}

const andre = new clientePoup("Andre", "andre@gmail.com", "216645456455", 500, 700);
console.log(andre);

andre.depositar(50);
andre.depositarPoup(50);
console.log(andre);