//Enlazada circular
function Node(element) {
  this.element = element;
  this.next = null;
  }
function ListaE() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function find(item) {
  var nodeAct = this.head;
  while (nodeAct.element != item) {
    nodeAct = nodeAct.next;
  }
  return nodeAct;
}

function insert(newElement, item) {
  var Node_ = new Node(newElement);
  var current = this.find(item);
  Node_.next = current.next;
  current.next = Node_;
}

function display() {
  var nodeAct = this.head;
  while (!(nodeAct.next == null) &&
  !(nodeAct.next.element == "head")) {
  console.log(nodeAct.next.element);
  nodeAct = nodeAct.next;
  }
  }

function findPrevious(item) {
  var nodeAct = this.head;
  while (!(nodeAct.next == null) &&
  (nodeAct.next.element != item)) {
    nodeAct = nodeAct.next;
  }
  return nodeAct;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
  prevNode.next = prevNode.next.next;
  }
}

var Info = new ListaE();
Info.insert("Mariana", "head");
Info.insert("Carlos", "Mariana");
Info.insert("Kevin", "Carlos");
Info.display()
console.log(Info);