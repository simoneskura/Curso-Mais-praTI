const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite seu peso em kg: ', (pesoStr) => {
  readline.question('Digite sua altura em metros (ex: 1.75): ', (alturaStr) => {
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log('Valores inválidos. Digite números positivos.');
    } else {
      const imc = peso / (altura * altura);
      console.log(`Seu IMC é: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        console.log('Abaixo do Peso ');
      } else if (imc < 25) {
        console.log('Peso normal');
      } else if (imc < 30) {
        console.log(' Acima do peso ');
      } else {
        console.log('Você é uma pessoa obesa');
      }
    }

    readline.close();
  });
});
