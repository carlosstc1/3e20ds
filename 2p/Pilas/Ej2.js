//Palíndromo

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

function Palindromo(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var word1 = "";
    while (s.length() > 0) {
        word1 += s.pop();
    }
    if (word == word1) {
        return "--->La palabra: ["+palabra+"] SI es un palíndromo<---";
    }
    else {
        return "--->La palabra: ["+palabra+"] NO es un palíndromo<---";
    }
}

var palabra = "oso";
console.log(Palindromo(palabra));
palabra = "aleta";
console.log(Palindromo(palabra));