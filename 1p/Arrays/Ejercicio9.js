    //Array Factorial.
    var n = 10;
    var total = 1; 
    var array = [];
	for (i = 1; i <= n; i ++) {
        total = total * i;
        array[i-1] = total
        console.log(+i+'! = '+array[i-1]);
         
	}