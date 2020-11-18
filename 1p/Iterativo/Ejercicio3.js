//generar 10e4 numeros aleatorios //[0, 999999]
console.time();
const x = 10000;
var array = [];
var y = 0;
while(x > array.length){
array[y] = (Math.random() * (1 - 0) + 0);
y++

}
for(var i = 0; i < array.length; i++){
console.log(array[i]);}
console.timeEnd();
//el tiempo promedio fue de 1.174 segundos
//se podría mejorar haciendo ordenamiento recursivo