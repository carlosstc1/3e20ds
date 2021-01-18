class Node{ 
    constructor(data, next){
        this.data=data;
        this.next=next;
    }
}
class LinkedList{  
        constructor() {
        this.head=null;
        this.size=0;
    }

    add(data){  
        const newNode= new Node(data,null);
        if(!this.head){  
            this.head=newNode;
        }
        else{  
            let current = this.head; 
            while(current.next){  
                current=current.next; 
            }
            current.next=newNode; 

        }
        this.size++;
    }

    removeFrom(index){  
        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous = null;

        if(index === 0) current = this.head;
        else
        {
            for(let i = 0; i < index; i++)
            {
                previous = current;
                current = current.next;
            }
            previous = current;
        }

        return current.data
    }
    getsize(){ 
        return this.size;
    }
}

const linkedList = new LinkedList(); 
const matriz=[];
linkedList.add(22);     
linkedList.add('Juan');     
linkedList.add('Pedro');
linkedList.add('Rogelio');  
linkedList.add('Mariano');      
console.log(linkedList);    
for (let i = 0; i < linkedList.getsize(); i++){
    matriz[i]=linkedList.removeFrom(i);
}
console.log("Matriz convertida: ");
console.log(matriz);