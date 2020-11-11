
//aleatorios (min=1, max=(Dato de consola))
var n;
const k = 1;
console.log('Ingrese el número máximo para los números aleatorios: ');
process.stdin.on('data', function(data){
n = data.toString();

for (var i = 0; i < 10; i++) {
    var aleatorio = Math.round(Math.random()*n);
    console.log(aleatorio);
 }
//console.log(k);
process.exit();

})
