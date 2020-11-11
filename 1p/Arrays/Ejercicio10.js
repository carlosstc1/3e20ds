var x = 1;
var array = [];
var sen = 0;
for(var i = 0; i < 10; i++){
    sen = Math.sin(x);
    array[i] = sen;
    x++;
}
x = 1;
for(var i = 0; i < 10; i++){
console.log('El seno de '+x+ ' Es igual a: '+array[i]);    
x++;
}
console.log('El array tiene '+array.length+' elementos, los cuales son: '+array);