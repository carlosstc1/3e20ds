// Factorial
for(let z=1;z<=10;z++){

    console.log(z+"!="+factorial(z));        

}

function factorial(numero){              
    var final = 1;
    
    for(let i=1;i<=numero;i++){         
        
        final=final*i;              
    
    }
    
    return final;                  
}
