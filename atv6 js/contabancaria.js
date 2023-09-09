class ContaBancaria {
    constructor(saldoInicial) {
      this.saldo = saldoInicial || 0;
      this.historicoTransacoes = [];
    }
  
    depositar(valor) {
      this.saldo += valor;
      this.historicoTransacoes.push({ tipo: "Depósito", valor: valor, data: new Date() });
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
        return;
      }
      this.saldo -= valor;
      this.historicoTransacoes.push({ tipo: "Saque", valor: valor, data: new Date() });
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  
    extrato() {
      console.log(`Saldo atual: R$${this.saldo}`);
    }
  
    verHistorico() {
      console.log("Histórico de Transações:");
      for (const transacao of this.historicoTransacoes) {
        console.log(`${transacao.tipo}: R$${transacao.valor} em ${transacao.data}`);
      }
    }
  }
  
  function menu() {
    console.log('Bem-vindo/a à Conta Bancária! Escolha uma opção.');
    console.log('1 - Depositar');
    console.log('2 - Sacar');
    console.log('3 - Ver Saldo Atual');
    console.log('4 - Ver Histórico de Transações');
    console.log('5 - Sair');
    return Number.parseInt(prompt('Digite a opção desejada: '));
  }
  
  const conta = new ContaBancaria(5000); // Saldo inicial de R$1000
  
  while (true) {
    const escolha = menu();
    
    switch (escolha) {
      case 1:
        const valorDeposito = parseFloat(prompt("Digite o valor a ser depositado: "));
        conta.depositar(valorDeposito);
        break;
      case 2:
        const valorSaque = parseFloat(prompt("Digite o valor a ser sacado: "));
        conta.sacar(valorSaque);
        break;
      case 3:
        conta.extrato();
        break;
      case 4:
        conta.verHistorico();
        break;
      case 5:
        console.log('Encerrando...\nVocê encerrou o programa.');
        return;
      default:
        console.log('Opção inválida. Escolha um número de 1 a 5.');
        break;
    }
  }