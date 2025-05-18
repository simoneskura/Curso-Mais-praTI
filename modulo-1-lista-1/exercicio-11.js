  const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite 5 números inteiros separados por espaço: ', (entrada) => {
  const numerosStr = entrada.trim().split(' ');
  
  if (numerosStr.length !== 5) {
    console.log('Erro: você deve digitar exatamente 5 números.');
    readline.close();
    return;
  }
  
  let soma = 0;
  let valido = true;
  
  for (let i = 0; i < numerosStr.length; i++) {
    const numero = parseInt(numerosStr[i]);
    if (isNaN(numero)) {
      console.log(`Erro: "${numerosStr[i]}" não é um número inteiro válido.`);
      valido = false;
      break;
    }
    soma += numero;
  }
  
  if (valido) {
    console.log(`A soma total dos 5 números inteiros é: ${soma}`);
  }
  
  readline.close();
});
