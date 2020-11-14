//Quinto fibonacci
const n = 10;
var val0 = 0;
var val1 = 1;
var val2 = 1;
var fibonacci = [];
for(var i=0; i<n; i++){
val2 = val0 + val1;
val0 = val1;
val1 = val2;
fibonacci[i] = val2;
}
console.log('El array contiene '+fibonacci.length+ ' elementos, el quinto elemento es: '+fibonacci[4]);