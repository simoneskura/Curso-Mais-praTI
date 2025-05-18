const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número de 1 a 10 para ver a tabuada: ', (entrada) => {
  const num = parseInt(entrada);

  if (isNaN(num) || num < 1 || num > 10) {
    console.log('Por favor, digite um número válido entre 1 e 10.');
  } else {
    console.log(`Tabuada do ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }

  readline.close();
});
