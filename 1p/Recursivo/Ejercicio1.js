  //1, 3, 5, ...
for(let i=0;i<=9;i++){    
    console.log('['+(i+1)+'] '+Serie(i));           
}
function Serie(n){
    if(n==0){
        return 1;
    }
    return 2+Serie(n-1);
}
