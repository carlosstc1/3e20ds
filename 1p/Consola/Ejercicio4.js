var i = 1;
var primo = 2;
var esPrimo = 1;

var n;
console.log('Coloque la cantidad de elementos de la serie: ');
process.stdin.on('data', function(data){
n = data.toString();
while (i <= n){
    let mitad = Math.round(primo / 2);
    while (mitad >= 2 && esPrimo == 1 ){
        if (primo % mitad == 0){
            esPrimo = 0;    
        }
        
        mitad--;    
    }
    if(esPrimo == 1){
        console.log('Numero primo #['+i+'] = '+primo);
        i++;
    } 
    primo += 1;
    esPrimo = 1;
}
process.exit();}

)