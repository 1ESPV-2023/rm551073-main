function insereNumeroNoVisor(botao, visor) {
    const ultimoCaractere = visor.value[visor.value.length - 1];
    const operadores = ['+', '-', '*', '/'];
  
    if (operadores.includes(ultimoCaractere) && operadores.includes(botao.value)) {
      // substitui o último operador pelo novo operador selecionado
      visor.value = visor.value.slice(0, -1) + botao.value;
    } else {
      visor.value += botao.value;
    }
  }
  
  function resultadoDasOperacoes(visor) {
    visor.value = eval(visor.value);
  }
  
  function multiplicacao(valor, visor) {
    visor.value += "*";
  }
  
  function divisao(valor, visor) {
    visor.value += "/";
  }
  