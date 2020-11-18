//tomar tiempo e imprimir resultado para, n=10e4, 10e5, 10e6
console.time();
let map = new Map();
map.set('10e4',Math.pow(10,4))
map.set('10e5',Math.pow(10,5))
map.set('10e6',Math.pow(10,6))
console.log(map)
console.timeEnd();