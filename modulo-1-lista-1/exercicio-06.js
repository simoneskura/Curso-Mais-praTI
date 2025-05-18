const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o valor do lado A: ', (aStr) => {
  readline.question('Digite o valor do lado B: ', (bStr) => {
    readline.question('Digite o valor do lado C: ', (cStr) => {
      const A = parseFloat(aStr);
      const B = parseFloat(bStr);
      const C = parseFloat(cStr);

      if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
        console.log('Valores inválidos. Digite números positivos.');
      } else if (A < B + C && B < A + C && C < A + B) {
        console.log('É um triângulo.');

        if (A === B && B === C) {
          console.log('Tipo: Equilátero');
        } else if (A === B || A === C || B === C) {
          console.log('Tipo: Isósceles');
        } else {
          console.log('Tipo: Escaleno');
        }

      } else {
        console.log('Os valores informados NÃO formam um triângulo.');
      }

      readline.close();
    });
  });
});
