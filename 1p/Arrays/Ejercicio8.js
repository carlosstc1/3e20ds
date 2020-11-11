//Potencia x a la y
var x = 2;
var y = 1;
var array = [];
for(var i = 0; i< 10; i++){
array[i] = Math.pow(x, y);
console.log('El '+x+' elevado a '+y+' es igual a: ' +array[i]);
y ++;
}
console.log('El array contiene '+array.length+ ' elementos, los cuales son: ' +array);
