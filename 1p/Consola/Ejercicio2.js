//Potencia x a la y
var x;
var y = 1;
console.log('Coloque el número que desea sacar su potencia');
process.stdin.on('data', function(data){
x = data.toString();

for(var i = 1; i<= 10; i++){
var p = Math.pow(x, y);
console.log('El '+x+' elevado a '+y+' es igual a: ' +p);
y ++;
}
process.exit();
})
