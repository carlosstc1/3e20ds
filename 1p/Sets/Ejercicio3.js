//Agregar n nombres aleatorios.
let mySet = new Set();
const n = 100;
while(mySet.size < n){
 mySet.add('name '+Math.floor(Math.random() * (1000 - 1) + 1));
}   
console.log('El set contiene '+mySet.size+' elementos, los cuales son: ');
console.log(mySet);