//generar 10e5 numeros aleatorios //[0, 999999]
console.time();
const x = 100000;
var array = [];
var y = 0;
while(x > array.length){
array[y] = (Math.random() * (1 - 0) + 0);
y++

}
for(var i = 0; i < array.length; i++){
console.log(array[i]);}
console.timeEnd();
//el tiempo promedio fue de 15.138 segundos
//se podría mejorar haciendo ordenamiento recursivo