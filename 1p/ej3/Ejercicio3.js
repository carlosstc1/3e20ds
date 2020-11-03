//Imprimir series de n=10 números según corresponda

//usar iteraciones de k={1,n}

//no leer datos, ie usar constantes x=3

//fibonacci

const n = 10;
var val0 = 0;
var val1 = 1;
var val2 = 1;
for(var i=0; i<n; i++){
val2 = val0 + val1;
val0 = val1;
val1 = val2;
console.log(val2);




}