//Dance
  
class Dance{

    constructor(){

        this.dataStore = {}
        this.front = 0;
        this.end = 0

    }
    
    discoverSex(names,w,m){

        let men = 0
        let woman = 0

      for(let i = 1; i <= names.length; i++){

          if(i%2 == 0){

             m[men] = names[i];
             men++;

           }

          else if (i%2 > 0){

             w[woman] = names[i];
             woman++;
          }
       }
    }

    emp(w, m, couple){

        for(let i = 0; i < 7;i++)
        {
            let men = Math.round(Math.random()*10);
            let woman = Math.round(Math.random()*10);
            
             couple[i] =  w[i] +" le tocará bailar con: "+ m[i];

        }
    }

    enqueue(data){

        this.dataStore[this.end] = data;
        this.end++;

    }

    dequeue(){

        let x;

        if(this.size === 0) return null;

        x = this.item[this.front];

        delete this.item[this.front];

        this.front++;

        return x;

    }

    size(){return this.end - this.front}

    isEmpty(){

        if(this.size() === 0)return true; 

        else return false 
    }

    peek(){

      if(this.size === 0) return null;

      return this.item[this.front];

    }

  
    print(){

        if(this.size === 0)return null;

        let result = '';

        for(let i = this.front; i < this.end; i++)
        {
          result += this.item[i];
        }
        return result
    }

    clear()

    {
        this.item = [];
        this.front = 0;
        this.end = 0;
    }

       
}

let names = ["Ricardo","Ana","José","Rocio","Jonny","Paola","Adolfo","Carolina","Samuel","Andrea","Sebastián","Sandy","Edson","María","Jesús"]
let ladies = [];
let men = [];
let couple = [];
let  pairing = new Dance();
pairing.discoverSex(names,ladies,men);
pairing.emp(ladies,men,couple);
for(let x = 0; x < couple.length; x++) pairing.enqueue(couple[x])

console.log("Total de personas participando : ",names.length -1)
console.log("Nombres : ", names)

console.log("Bailarinas : " , ladies.toString())
console.log("Bailarines :" , men.toString())

console.log("Cola de parejas", pairing)

for(let x = 0; x < couple.length; x++)console.log("Pareja ",x+1," : ",couple[x])