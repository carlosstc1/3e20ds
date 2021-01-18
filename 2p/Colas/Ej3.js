//Cola Priority
function Cola() { 
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
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
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
function count() {
    return this.dataStore.length;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " codigo: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var p = new Patient("Ricardo",5);
var ed = new Cola();
ed.enqueue(p);
p = new Patient("Gerardo", 4);
ed.enqueue(p);
p = new Patient("Antonio", 6);
ed.enqueue(p);
p = new Patient("Francisco ", 1);
ed.enqueue(p);
p = new Patient("Pedro", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Paciente siendo tratado: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Paciente siendo tratado: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Paciente siendo tratado: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(ed.toString());