//Enlazado simple


class Nodo{
    constructor(Dato, Next){
        this.Dato = Dato;
        this.Next = Next;
    }}
class EnlazadaSimple{
    constructor() {
        this.Inicio=null;
        this.Tamaño=5;}
    InfoAdd(Dato){
        let NuevoNodo= new Nodo(Dato,null);
        if (!this.Inicio){
            this.Inicio=NuevoNodo;}
        else{
            let Actual=this.Inicio;
            while (Actual.Next){
                Actual=Actual.Next;}
            Actual.Next=NuevoNodo;
        }this.Tamaño ++;}}
let ListaSimple = new EnlazadaSimple()
console.log(ListaSimple);
ListaSimple.InfoAdd('Rojo');
ListaSimple.InfoAdd('Amarillo');
ListaSimple.InfoAdd('Verde');
console.log(ListaSimple);