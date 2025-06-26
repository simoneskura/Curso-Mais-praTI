let texto = prompt("Digite uma frase:");
let palavras = texto.split(" ");
let unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let repetida = false;

  for (let j = 0; j < palavras.length; j++) {
    if (i !== j && palavraAtual === palavras[j]) {
      repetida = true;
      break;
    }
  }

  if (!repetida) {
    unicas.push(palavraAtual);
  }
}

console.log("Palavras únicas:", unicas);
  
  
