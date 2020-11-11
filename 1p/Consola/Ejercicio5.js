var x;
let z = 1;
let p = [];

console.log('Coloque el tamaño de la serie que desea: ');
process.stdin.on('data', function(data){
    x = data.toString();

    for(var i = 0; i < x; i++){
        p[i] = Math.log(z);
        z++

    }
    for(var t = 0; t < x; t++){
    console.log('El "Ln" de '+(t+1)+' es: ' +p[t]);
}
    process.exit();


})