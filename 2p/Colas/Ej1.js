//Dance 
class Cola{
    constructor() {
        this.fin=[];
    }
    add(element){
        this.fin.push(element)
        return this.fin;
    }
    quitar(){
        return this.fin.shift();
    }
    primero() {
        return this.fin[0];
    }
    mostrar(){
        return this.fin;
    }
    vacio(){
        if (this.fin.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function dance(hom, muj) {
    console.log('+--------------------------------+')
    console.log("    Lista de Parejas de baile: ");
    console.log('+--------------------------------+');
    var counter = 1;
    while (!muj.vacio() && !hom.vacio()) {
     
        

        person = muj.quitar();
        person2 = hom.quitar();
        console.log("Pareja número "+counter+ ' --> '+ person.name+ ' y ' +person2.name);
        counter++
       
    }
    console.log();
}
let hombre = new Cola();
let mujer = new Cola();

hombre.add(new Dancer("Carlos", "h"))
hombre.add(new Dancer("Arturo", "h"))
hombre.add(new Dancer("Enrique", "h"))
hombre.add(new Dancer("Francisco", "h"))
hombre.add(new Dancer("Mariano", "h"))

mujer.add(new Dancer("Xelhá","m"))
mujer.add(new Dancer("Nahibi","m"))
mujer.add(new Dancer("Margarita","m"))
mujer.add(new Dancer("Zocorro","m"))

dance(hombre,mujer)
if (!mujer.vacio()) {
    console.log(mujer.primero().name + " esta esperando.");
}
if (!hombre.vacio()) {
    console.log('+--------------------------------+');
    console.log('     '+hombre.primero().name + " está en espera.");
    console.log('+--------------------------------+');
}