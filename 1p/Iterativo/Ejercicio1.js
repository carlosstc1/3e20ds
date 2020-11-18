//generar 10e6 numeros aleatorios //[0, 999999]
console.time();
const x = 1000000;
var array = [];
var y = 0;
while(x > array.length){
array[y] = (Math.random() * (1 - 0) + 0);
y++

}

for(var i = 0; i < array.length; i++){
console.log(array[i]);}
console.timeEnd();
//el tiempo promedio fue de 1:33:22 minutos
//se podría mejorar haciendo ordenamiento recursivo