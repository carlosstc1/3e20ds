//Sacar columas de la matriz
let Matriz = [
    [3,6,9],[12,15,18],[21,24,27],[30,33,36]
    ]
    let n = Math.floor(Math.random() * (3 - 0)) + 0;;
    console.log('Matríz Original');
    console.log('[1] [2] [3]')
    for (let i=0; i<Matriz.length; i++){
        console.log(Matriz[i]);}

    console.log('Columna  '+(n+1)+' de la matríz: ');
    var nx = 0;
    for (let i=0; i<4; i++){
            console.log(Matriz[(nx++)][n]);
    }
