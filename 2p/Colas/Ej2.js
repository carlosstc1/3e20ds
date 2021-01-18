//Sort
function Cola() {

    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}
function enqueue(element) {
this.dataStore.push(element);
}
function dequeue() {
return this.dataStore.shift();
}
function front() {
return this.dataStore[0];
}
function back() {
return this.dataStore[this.dataStore.length-1];
}
function toString() {

var final = "";

for (var i = 0; i < this.dataStore.length; ++i) {

    final += this.dataStore[i];

}
return final;}
function empty() {
if (this.dataStore.length == 0) {
return true;
}else {
return false;
}
}
function distribute(val, Colas, n, digit) {
    for (var i = 0; i < n; ++i) {
    if (digit == 1) {
        Colas[val[i]%10].enqueue(val[i]);
    }else {
        Colas[Math.floor(val[i] / 10)].enqueue(val[i]);

        }

    }

}
    function collect(Colas, val) {

    var i = 0;

    for (var digit = 0; digit < 10; ++digit) {

    while (!Colas[digit].empty()) {

        val[i++] = Colas[digit].dequeue();
    
    }
    }
    }

    function dispArray(arr) {

    for (var i = 0; i < arr.length; ++i) {

    console.log(arr[i]);

    }
    }

    var Colas = [];

    for (var i = 0; i < 10; ++i) {

        Colas[i] = new Cola();

    }


    var val = [];

    for (var i = 0; i < 10; ++i) {

        val[i] = Math.floor(Math.floor(Math.random() * 101));

    }
    console.log("---------------------")
    console.log("Original:");
    console.log("---------------------")

    dispArray(val);
    distribute(val, Colas, 10, 1);
    collect(Colas, val);
    distribute(val, Colas, 10, 10);
    collect(Colas, val);
    console.log("---------------------")
    console.log("Ordenado: ");
    console.log("---------------------")
    dispArray(val);