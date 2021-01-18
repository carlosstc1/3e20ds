class size {
    constructor(o) {
  
        this.n = o
  
    }
  
  
    addVertex(v) {
  
        this.n[v] = 0
  
    }
    
  
    addEdge(e, x) {
  
        if (typeof (this.n[e] === "number")) {
  
            this.n[e] = []
  
        }
  
        this.n[e][x] = 1
  
    }
  
  
    fill() {
  
        for (let i = 0; i < this.n.length; i++) {
  
            for (let j = 0; j < this.n.length; j++) {
  
                if (this.n[i][j] === undefined)
  
                    this.n[i][j] = 0;
  
            }
        }
    }
  
  
    toString() {
  
        let s = "\n"
  
        for (let i = 0; i < this.n.length; i++) {
  
            s += "\n"
  
            for (let j = 0; j < this.n.length; j++) {
  
                s += this.n[i][j];
  
            }
  
        }
  
        return s;
  
    }
  
  
    print() {
  
        console.log(this.toString())
  
    }
  
  
    size() {
  
        console.log(this.n.length)
        
    }
  
  }
  
  let g = new size([])
  
  g.addVertex(0)
  g.addVertex(1)
  g.addVertex(2)
  
  g.addEdge(0,1)
  g.addEdge(0,2)
  g.addEdge(1,2)
  g.addEdge(2,0)
  
  g.fill()
  g.print()
  g.size()