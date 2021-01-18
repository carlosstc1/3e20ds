class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    insertAtHead(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode
      } else {
        newNode.next = this.head;
        this.head = newNode;  
      }
      this.size++;
    }
    removeHead() {
      if (this.head === null)
        return
      else {
        this.head = this.head.next;
        this.size--;
      }
    }
  
    find(value) {
      if (this.head.data === value) return this.head;
  
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.data === value)
          return currentNode;
        else
          currentNode = currentNode.next;
      }
      return null;
    }
  
    deleteByValue(value) {
      if (this.head.data === value)
        return this.removeHead();
      
      let currentNode = this.head.next;
      let previousNode = this.head;
  
      while(currentNode) {
        if (currentNode.data === value) break;
        
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
  
      if (currentNode) {
        previousNode.next = currentNode.next;
        this.size--;
      }
    }
  
    insertAfterValue(value, data) {
      const previousNode = this.find(value);
      
      if (previousNode) {
        const newNode = new Node(data);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.size++;
      }
    }
  
    print() {
      let node = this.head;
      let str = `${node.data}`;
      while (node.next) {
        str += ` => ${node.next.data}`
        node = node.next;
      }
      console.log(str);
    }

    _size()
     {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

  }
  
  
  myList = new LinkedList();
  myList.insertAtHead(17)
  myList.insertAtHead(71)
  myList.insertAtHead(22)
  myList.insertAtHead(19);
  myList.insertAfterValue(22, 12)
  
  myList.print();
  