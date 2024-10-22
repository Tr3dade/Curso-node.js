const x = '10';

if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro");
}

console.log("o valor de x é um numero inteiro")