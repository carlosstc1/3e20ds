//Generar 10 nombres aleatorios.
let mySet = new Set();
const x = 10;
while(mySet.size < x){
 mySet.add('name '+Math.floor(Math.random() * (100 - 1) + 1));
}   
console.log('El set contiene '+mySet.size+' elementos, los cuales son: ');
console.log(mySet);