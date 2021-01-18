//Quitar filas de la matriz
let Matriz = [
[3,6,9],[12,15,18],[21,24,27],[30,33,36]
]
let n = Math.floor(Math.random() * (4 - 0)) + 0;;
console.log('Matríz Original');
for (let i=0; i<Matriz.length; i++){
    console.log('['+(i+1)+']'+Matriz[i]);}
console.log('Línea  '+(n+1)+' de la matríz: ');
console.log(Matriz[n]);
