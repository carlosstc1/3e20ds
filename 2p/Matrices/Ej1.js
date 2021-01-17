//Matríz de 3x3 transpuesta
let Matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let matriz= [];
for(let i=0; i<3; i++) {
    matriz[i]=[]
}
console.log("Matríz Original: ")
for (let i=0; i<Matriz.length; i++){

    console.log(Matriz[i]);
}
class Procedimiento{
    static trasponer(){
        for (let i=0; i<3; i++) {
            for (let x = 0; x < 3; x++) {
                matriz[x][i] = Matriz[i][x];
            }
        }
        console.log("Matríz Transpuesta: ")
        for (let i=0; i<matriz.length; i++){
            console.log(matriz[i]);
        }
    }
}
Procedimiento.trasponer()