//Serie de Números Negativa
let val1=1;                                 
for(let s=0;;s++){                     
    if(s%2==1){                       
        if(val1%2==1){                  
            console.log(s*-1);
        }
        else if (val1%2==0){           
            console.log(s);
        }
    val1++;                         
    }
    if(val1>10){
        break;                
    }
}
