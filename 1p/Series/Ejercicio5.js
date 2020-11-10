//Número Triangular
let val1 = 1;
let val2 = 0;
for(var i = 1; i<=10; i++){
    val1 = i;
    val2 = (val1*(val1 + 1))/2;
    console.log(val2);
}