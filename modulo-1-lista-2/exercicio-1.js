// função que verifica se o ano é bissexto
function ehAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função que verifica  se a data é válida
function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12 || dia < 1 || ano < 1) {
    return false;
  }

  let diasNoMes;

  if (mes === 2) {
    diasNoMes = ehAnoBissexto(ano) ? 29 : 28;
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    diasNoMes = 30;
  } else {
    diasNoMes = 31;
  }

  return dia <= diasNoMes;
}

// Solicita os valores ao usuário (em Node.js usando prompt-sync)
const prompt = require('prompt-sync')();

const dia = parseInt(prompt("Digite o dia: "));
const mes = parseInt(prompt("Digite o mês: "));
const ano = parseInt(prompt("Digite o ano: "));

if (ehDataValida(dia, mes, ano)) {
  console.log("? A data é válida.");
} else {
  console.log("? A data é inválida.");
}

