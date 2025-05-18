const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número inteiro para calcular o fatorial: ', (entrada) => {
  const num = parseInt(entrada);

  if (isNaN(num) || num < 0) {
    console.log('Por favor, digite um número inteiro não negativo.');
  } else {
    let fatorial = 1;
    let i = 2;

    while (i <= num) {
      fatorial *= i;
      i++;
    }

    console.log(`Fatorial de ${num} é: ${fatorial}`);
  }

  readline.close();
});  
