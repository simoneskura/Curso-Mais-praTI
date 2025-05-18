const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número inteiro: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Isso não é um número válido!');
  } else {
    if (numero % 2 === 0) {
      console.log(`${numero} é par.`);
    } else {
      console.log(`${numero} é ímpar.`);
    }
  }

readline.close();
}); 
