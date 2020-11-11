//aleatorios (min=1, max=10)
const n = 10;
const k = 1;
let array = [];
for (var i = 0; i < n; i++) {
    var aleatorio = Math.round(Math.random()*n);
    array[i] = aleatorio;
 }
 console.log('El array contiene '+array.length+' elementos, los cuales son: '+array);