let x;
console.log('Coloque el tamaño que desea la serie: ');
process.stdin.on('data', function(data){
    x = data.toString();

    for(var i = 1; i <= x; i++){
        if((i)== 1){
            console.log('['+i+'] '+i);
        }
        else{
            if(i%2==0){
                console.log('['+i+'] -1/'+i);
            }
            else{
                console.log('['+i+'] +1/'+i);
            }


        }
    }
    process.exit();
})