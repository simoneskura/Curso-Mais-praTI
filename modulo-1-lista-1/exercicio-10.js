const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número inteiro: ', (entrada) => {
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log('❌ Entrada inválida. Por favor, digite um número inteiro.');
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}. ${numero}`);
    }
  }

  readline.close();
});  
