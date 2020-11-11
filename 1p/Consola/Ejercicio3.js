//Factorial
var x;
console.log('Coloque cuantos números quiere en la serie: ');
process.stdin.on('data', function(data){
x = data.toString();
for(let z=1;z<=x;z++){

    console.log(z+"!="+factorial(z));        

}
process.exit();
})
function factorial(numero){              
    var final = 1;
    
    for(let i=1;i<=numero;i++){         
        
        final=final*i;              
    
    }
    
    return final;                  
}