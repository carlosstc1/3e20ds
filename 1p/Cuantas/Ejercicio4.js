//De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?
const dato = 8;
var resultado = dato;
var i = dato-1;
while(i>1){
    resultado = resultado * i;
    i--;
}
console.log('Se pueden formar '+resultado+' palabras de 8 símbolos.');