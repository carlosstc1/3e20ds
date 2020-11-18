//tomar tiempo e imprimir resultado para, n=10e4, 10e5, 10e6
console.time();
let set = new Set();
set.add(Math.pow(10,4))
set.add(Math.pow(10,5))
set.add(Math.pow(10,6))
console.log(set)
console.timeEnd();