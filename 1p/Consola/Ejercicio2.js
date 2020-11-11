//Potencia x a la y
var x = 2;
var y = 1;
var contador;
console.log('Coloque cuantos números quiere en la serie: ');
process.stdin.on('data', function(data){
contador = data.toString();

for(var i = 1; i<= contador; i++){
var p = Math.pow(x, y);
console.log('El '+x+' elevado a '+y+' es igual a: ' +p);
y ++;
}
process.exit();
})
