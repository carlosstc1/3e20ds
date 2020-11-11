let x;
let ln = [];

console.log('Coloque la cantidad de elementos que desea: ');
process.stdin.on('data', function(data){
    x = data.toString();
    for(var i = 0; i < x; i++){
        if(i%2==0){
            console.log('['+(i+1)+'] - x^'+(i+1)+'/'+(i+1));
        }
        else{
            console.log('['+(i+1)+'] + x^'+(i+1)+'/'+(i+1));
        }
        
    }
    process.exit();
})