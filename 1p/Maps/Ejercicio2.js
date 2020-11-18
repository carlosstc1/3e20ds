//generar 10 nombres aleatorios//name3, name9, ... , name1
let myMap = new Map();
const x = 10;
var i = 1;
while(myMap.size < x){
 myMap.set('name '+[i], (Math.floor(Math.random() * (100 - 1) + 1)));
 i++;
}   
console.log('El Map contiene '+myMap.size+' elementos, los cuales son: ');
console.log(myMap);