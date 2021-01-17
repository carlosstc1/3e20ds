//MergeSort
const MergeSort = arrary => {if (arrary.length < 2) {
    return arrary;
}
const middle = parseInt(arrary.length / 2) | 0;
const left = arrary.slice(0, middle);
const right = arrary.slice(middle);
const Merge = (left, right) => {
    const result = [];
    let il = ir = 0;
    while (il < left.length && ir < right.length) {
        result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
    }
    return [...result, ...left.slice(il), ...right.slice(ir)];
}
    return Merge(MergeSort(left), MergeSort(right));
}
const arrary = [50, 54, 74, 94, 34, 15, 84, 64,];
const result = MergeSort(arrary);
console.log('El array sin ordenar es: '+arrary);
console.log('El array ya ordenado es: '+result)

result;