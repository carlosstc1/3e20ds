  //Recursivo factorial
for(let i=1;i<=10;i++){
    console.log(i+"! = "+factorial(i));
}
function factorial (n) { 
	if (n == 0 || n==1){ 
		return 1; 
	}
	return n * factorial (n-1); 
}