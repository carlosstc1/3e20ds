//COmbinaciones
//Complejidad computacional: exponencial
var s = [3,1,4,2,3]
var result;
const c = (inputArr) => {
    result = [];

    const comb = (array, m = []) => {
        if (array.length === 0) {
            result.push(m);


        } else {


            for (let i = 0; i < array.length; i++) {
                let t = array.slice();
                let n = t.splice(i, 1);
                comb(t, m.concat(n));
            }
        }
    }
    comb(inputArr);
    return result;
}
console.log(c(s));
