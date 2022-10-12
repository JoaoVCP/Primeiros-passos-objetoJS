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

const andre = new Cliente("André","andre@gmail.com","4651654",250);

andre.exibirSaldo(); //exibe o saldo de andre
console.log(andre);
andre.depositar(250); //utiliza a funcao para depositar
console.log(andre);