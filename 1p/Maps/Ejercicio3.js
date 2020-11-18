//generar n nombres aleatorios//name3, name9, ... , name1
let myMap = new Map();
const x = 100;
var i = 1;
while(myMap.size < x){
 myMap.set('name '+[i], (Math.floor(Math.random() * (1000 - 1) + 1)));
 i++;
}   
console.log('El Map contiene '+myMap.size+' elementos, los cuales son: ');
console.log(myMap);