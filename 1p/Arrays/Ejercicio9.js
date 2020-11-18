// Factorial array
var n = 10;
var num1;
var factorial = 1;
var arr = [];
for (let i = 0; i<n; i++){
    arr[i] = factorial;
    num1 = i + 2;
    factorial = factorial * num1;
}
console.log (arr);