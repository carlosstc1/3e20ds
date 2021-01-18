//Conversión
class Pila{
    constructor() {
        this.pila=[]
        this.top=0;
    }
    agregar(algo){
        this.pila[this.top++] = algo
    }
    quitar2(){
        return this.pila[--this.top]
    }
    tamaño(){
        return this.top;
    }
}
function Convert(val1, base) {
    let pila = new Pila();
    let val2=val1;
    do {
        pila.agregar(val1 % base);
        val1 = Math.floor(val1 /= base);
    }
    while (val1 > 0);
    let final = "";
    while (pila.tamaño() > 0) {
        final += pila.quitar2();
    }
    console.log('El número: ['+val2 +"] Convertido a base _"+ base + "_ es igual a: ["+final+']');
    return final;
}
Convert(84,16)
Convert(49,2)
Convert(32,7)
Convert(126,8)