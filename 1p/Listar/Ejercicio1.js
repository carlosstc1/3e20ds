//potencia(S)

const x = 

      theArray => theArray.reduce(
        (sub, val) => sub.concat(
         sub.map(set => [val,...set])
        ),[[]]);

console.log(x([3,1,4,2,3]));
