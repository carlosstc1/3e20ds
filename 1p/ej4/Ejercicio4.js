//Números primos...
const n = 10;
var j = 2;
var Primos = [];

for (; j < n; j++) {

  if (primo(j)) {
    Primos.push(j);
  }
  
}

console.log(Primos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}