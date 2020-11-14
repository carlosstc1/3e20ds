    //Quinto Factorial.
    var n = 5;
    var total = 1; 
    var array = [];
	for (i = 1; i <= n; i ++) {
        total = total * i;
        array[i-1] = total
         
    }
    
	console.log('El quinto elemento es: '+array[4]);

