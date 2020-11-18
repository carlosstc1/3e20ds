//Potencia
//Complejidad computacional: función exponencial
let r = [3,1,4,2,3];
    function potencia(x) {
        return x.reduce((z, y) => 
            z.concat(z.map(d => [y].concat(d))), [[]]);
    }
console.log(potencia(r));
