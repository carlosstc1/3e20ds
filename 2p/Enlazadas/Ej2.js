//Enlazado doble



class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
const head = Symbol("head");
const tail = Symbol("tail");
class DoublyLinkedList { 
    constructor() {
        this[head] = null;
        this[tail] = null;
    }
    add(data) {
        const nodo = new DoublyLinkedListNode(data);
        if (this[head] === null) {
            this[head] = nodo;
        } else {
            this[tail].next = nodo;
            nodo.prev = this[tail];
        }
        this[tail] = nodo;
    }
    get(index) {
            let current = this[head];
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }
            return current !== null ? current.data : undefined;
    }
    remove(index) {
        if (index === 0) {
            const data = this[head].data;
            this[head] = this[head].next;

            if (this[head] === null) {
                this[tail] = null;
            } else {
                this[head].prev = null;
            }
            return data;
        }

        let current = this[head];
        let i = 0;

        while ((current !== null) && (i < index)) {
            current = current.next;
            i++;
        }

        if (current !== null) {
            current.prev.next = current.next;
            if (this[tail] === current) {
                this[tail] = current.prev;
            } else {
                current.next.prev = current.prev;
            }
            return current.data;
        }

        throw new RangeError(`Index ${index} no existe.`);
    }
    *values(){
        let current = this[head];
        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
}

const DatosDeLista = new DoublyLinkedList();
DatosDeLista.add("111");
DatosDeLista.add("222");
DatosDeLista.add("333");
console.log('Primer elemento: '+DatosDeLista.get(0));
DatosDeLista.remove(0);
console.log('Elementos siguientes: '+ [...DatosDeLista.values()]);
console.log(DatosDeLista);
