function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn == 'function') {
    console.log(fn(num1, num2));
    };
    };
    function somar(a, b) {
    return a + b;
    };

    function subtrair(a, b) {
    return a - b;
    };

    function multiplicar(a, b) {
    return a * b;
    };

    function dividir(a, b) {
        if (b !== 0) {
            return x / y;
          } else {
            return "Não é possível dividir zero.";
          }
    }


  function calcular(operador, x, y) {
    switch (operador) {
      case "+":
        return adicionar(x, y);
      case "-":
        return subtrair(x, y);
      case "*":
        return multiplicar(x, y);
      case "/":
        return dividir(x, y);
      default:
        return "Operação inválida.";
    }
  }

  // testado a calculadora
  function iniciarCalculadora()
    executar(somar, 90, 50);
    executar(subtrair, 90, 50);
    executar(multiplicar, 90, 50);
    executar(dividir, 40, 4);
    reiniciarCalculadora(0);

  console.log('Bem-vindo à calculadora!');
iniciarCalculadora();
