//Existen elementos repetidos?
var array=["FI29","FI09","JM15","FI29"]//devuelve true
//["FI29","FI09","JM15","FI28"]//devuelve false

var repetido = false;
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        if (array[i] == array[j] && i != j) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
            repetido= true;
         }
     }
 }
 console.log(repetido);