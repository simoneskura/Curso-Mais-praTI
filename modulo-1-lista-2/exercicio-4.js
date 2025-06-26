  function fatorial(n) {
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

try {
  let resultado = fatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
} catch (erro) {
  console.error(erro.message);
}
