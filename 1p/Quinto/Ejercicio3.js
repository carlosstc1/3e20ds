//Quinto primos
var i = 1;
var primo = 2;
var esPrimo = 1;
const n = 10;
var final = [];
while (i <= n){
    let mitad = Math.round(primo / 2);
    while (mitad >= 2 && esPrimo == 1 ){
        if (primo % mitad == 0){
            esPrimo = 0;    
        }
        
        mitad--;    
    }
    if(esPrimo == 1){
        final[i] = primo;
        i++;
    } 
    primo += 1;
    esPrimo = 1;
}

    console.log("El array contiene ["+final.length+"] elementos, el quinto elemento es: "+final[5]); 