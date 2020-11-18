//De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar?, r<=n
var n = 10;
var r = 8;
var facto = n;
var resultado = facto;
var i = facto-1;
var nFact, sFact;
//Función Factorial

function fact(resultado, i){
while(i>1){

    resultado = resultado * i;
    i--;
}
return resultado;
}   
nFact = fact(resultado, i);

    facto = n-r;
    resultado = facto;
    i = facto-1;
sFact = fact(resultado, i);

console.log('En un alfabeto de ['+n+'] símbolos podemos formar ['+(nFact/sFact)+'] palabras de ['+r+'] símbolos');

