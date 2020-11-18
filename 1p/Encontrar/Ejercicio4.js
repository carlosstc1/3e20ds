//Existen elementos repetidos?
var array=[3,1,4,2,3]//devuelve true
var num = 0;

var repetido = false;
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        if (array[i] == array[j] && i != j) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
            repetido= true;
            num = array[i];
         }
     }
 }
 if(repetido == false){
    console.log('No hay números repetidos');
 }
 else{
    console.log('Hay un número repetido, es: '+num);
 }
 