//Explicar diferencia entre set y weakset con un ejemplo


let weakset = new WeakSet();
var objeto1 = {nombre: 'objeto1'};
var objeto2 = {nombre: 'objeto2'};
var objeto3 = {nombre: 'objeto3'};

    weakset.add(objeto1);
    weakset.add(objeto2);
    weakset.add(objeto3);



console.log('------------------------------------------------------------------------------------------------------------------\n\n');
console.log('WeakSet: ');
console.log('\n\n-->Los objetos WeakSet son colecciones de objetos.\n\n-->Un objecto en WeakSet solo puede ser agregado una vez; Esto quiere decir que es unico en la coleccion WeakSet.\n\n-->A diferencia de  Sets, WeakSets  son solamente colecciones de objetos y no contienen valores arbitrarios de cualquier otro tipo.\n\n-->Ejemplo de Weakset:\n\n');
console.log(weakset);
console.log('\n\n');

let set=new Set();
set.add({});
var objeto1 = {nombre:'objeto1'};
var objeto2 = {nombre:'objeto2'};
var objeto3 = {nombre:'objeto3'};
set.add(objeto1);
set.add(objeto2);
set.add(objeto3);
objeto1 = null;
objeto2 = null;
objeto3 = null;

console.log('------------------------------------------------------------------------------------------------------------------\n\n');
console.log('Set: \n\n');
console.log('-->Los objetos Set son colecciones de valores. \n\n-->Se puede iterar sus elementos en el orden de su inserción. \n\n-->Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.\n\nEjemplo de un Set: \n\n');
console.log(set);
console.log('\n\nComo se puede observar, en los sets si podemos mantener los valores.')
console.log('\n\n------------------------------------------------------------------------------------------------------------------');
