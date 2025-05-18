  const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite números decimais separados por espaço (digite 0 para finalizar): ', (entrada) => {
const numerosStr = entrada.trim().split(' ');
  let soma = 0;
  let contador = 0;
  
  for (let i = 0; i < numerosStr.length; i++) {
    const num = parseFloat(numerosStr[i]);
    if (isNaN(num)) {
      console.log(`"${numerosStr[i]}" não é um número válido.`);
      readline.close();
      return;
    }
    if (num === 0) {
      break;
    }
    soma += num;
    contador++;
  }

  if (contador === 0) {
    console.log('Nenhum número válido foi digitado antes do zero.');
  } else {
    const media = soma / contador;
    console.log(`Média aritmética dos números digitados: ${media.toFixed(2)}`);
  }
  
  readline.close();
});
