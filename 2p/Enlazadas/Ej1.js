class CircularLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
const head = Symbol("head");
class CircularLinkedList {

    constructor() {
        this[head] = null;
    }

    add(data) {

        const newNode = new CircularLinkedListNode(data);

        // Si no hay ningun elemento procedemos a crear el nuevo nodo
        if (this[head] === null) {
            this[head] = newNode;
            newNode.next = newNode;
            newNode.previous = newNode;
        } else {        //Si ya tenemos algun elemento en el nodo

            const tail = this[head].previous;

            tail.next = newNode;
            newNode.previous = tail;
            newNode.next = this[head];
            this[head].previous = newNode;
        }
    }
}

const linkedList = new CircularLinkedList;  // creamos nuestra lista enlazada
linkedList.add("Skate");     //  Agregamos el valor skate a la lista enlazada
linkedList.add('COD');     //  Agregamos el valor 'COD' a la lista enlazada
linkedList.add('Fortnite');    //  Agregamos el valor 'Fortnite' a la lista enlazada
console.log(linkedList);    // Imprimimos el nodo