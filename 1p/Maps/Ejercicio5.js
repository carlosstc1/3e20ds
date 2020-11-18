//Explicar diferencia entre Map y WeakMap con un ejemplo


let weakset = new WeakMap();
var objeto1 = {nombre:'objeto1'};
var objeto2 = {nombre:'objeto1'};
var objeto3 = {nombre:'objeto1'};

    weakset.set(objeto1, 30);
    weakset.set(objeto1, 30);
    weakset.set(objeto1, 30);



console.log('------------------------------------------------------------------------------------------------------------------\n\n');
console.log('WeakMap: ');
console.log('\n\n-->El objeto WeakMap es una colección de pares clave/valor en la que las claves son objetos y los valores son valores arbitrarios.\n\n-->Las claves de los WeakMaps solamente pueden ser del tipo Object. Los Primitive data types como claves no están permitidos\n\n-->Todas las instancias de WeakMap heredan de WeakMap.prototype.\n\n');
console.log(weakset);
console.log('\n\n');

let map=new Map();
var objeto1 = {nombre:'objeto1'};
var objeto2 = {nombre:'objeto2'};
var objeto3 = {nombre:'objeto3'};
map.set(objeto1, 30);
map.set(objeto2, 20);
map.set(objeto3, 10);


console.log('------------------------------------------------------------------------------------------------------------------\n\n');
console.log('Map: \n\n');
console.log('-->El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.\n\n-->Un objeto Map puede iterar sobre sus elementos en orden de inserción.\n\n-->Todas las instancias de Map heredan de Map.prototype.\n\n');
console.log(map);
console.log('\n\nComo se puede observar, en los sets si podemos mantener los valores.')
console.log('\n\n------------------------------------------------------------------------------------------------------------------');
