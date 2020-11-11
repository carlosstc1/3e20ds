//Array de Números Negativa
let val1=1;
let array = []; 
let contador = 0;                                
for(let s=0;;s++){                     
    if(s%2==1){                       
        if(val1%2==1){                  
            array[contador] = (s*-1);
            contador++;
        }
        else if (val1%2==0){           
            array[contador] = (s);
            contador++;
        }
    val1++;                         
    }
    if(val1>10){
        break;                
    }
}
console.log(array);