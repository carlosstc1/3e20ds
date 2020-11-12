var x = 1;
var cont;
var sen = 0;
console.log('Coloque el tamaño que desea la serie: ');
process.stdin.on('data', function(data){
    cont = data.toString();

for(var i = 1; i <= cont; i++){
    sen = Math.sin(x);
    console.log('El seno de '+x+ ' Es igual a: '+sen);
    x++;
}
process.exit();
})