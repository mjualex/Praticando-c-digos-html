class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo; // O saldo acessado por getter e setter
    }

    // Getter do saldo
    get saldo() {
        return this._saldo;
    }

    // Setter do saldo
    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            this._saldo = novoSaldo;
        } else {
            console.log("Saldo não pode ser negativo.");
        }
    }

    // Método para sacar dinheiro
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    // Método para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo = 0) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
        this.tipo = "Conta Corrente";
    }

    // Getter do cartão de crédito
    getCartaoCredito() {
        return this.cartaoCredito;
    }

    // Setter do cartão de crédito
    setCartaoCredito(novoCartaoCredito) {
        this.cartaoCredito = novoCartaoCredito;
        console.log(`Cartão de crédito atualizado para ${novoCartaoCredito}.`);
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo = 0) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    // Método sacar dentro do limite de R$ 500
    sacar(valor) {
        if (valor <= 500) {
            super.sacar(valor);
        } else {
            console.log("Limite de saque excedido para a Conta Universitária.");
        }
    }
}

// Exemplo
const contaPoupanca = new ContaPoupanca("002", "54321");
contaPoupanca.depositar(500);
contaPoupanca.sacar(300);

const contaUniversitaria = new ContaUniversitaria("003", "98765");
contaUniversitaria.depositar(300);
contaUniversitaria.sacar(600);
