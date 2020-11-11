//Número Triangular
let val1 = 1;
let val2 = 0;
let array = [];
for(var i = 0; i<10; i++){
    val2 = (val1*(val1 + 1))/2;
    array[i] = val2;
    val1++;
}
console.log("Este array contiene "+array.length+" elementos, los cuales son: "+array);