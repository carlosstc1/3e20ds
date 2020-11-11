//Array de números primos
let x=1;                               
let array=new Array(10);               
for(let i=0;;i++){                    
    if(i%2==1){                      
        if(x%2==1){                
            array[x]=i*-1;
        }
        else if (x%2==0){           
            array[x]=i;
        }
    x++;                          
    }
    if(x>10){
        break;                 
    }
}

    console.log("El array contiene ["+array.length+"] elementos, los cuales son: "+array);   
