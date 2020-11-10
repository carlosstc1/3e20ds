//Imprimir series de n=10 números según corresponda
//usar iteraciones de k={1,n}
//no leer datos, ie usar constantes x=3
//Serie de números impares alternando signo.
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
