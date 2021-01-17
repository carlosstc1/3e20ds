//Resolver las torras de Hanoi
function Hanoi(CantDiscos, Posición, Destino){

    if(CantDiscos>0)

    {
        Hanoi(CantDiscos-1, Posición, 6-Posición-Destino); 

        console.log(" Mover disco  "+ CantDiscos + " de la torre " + Posición + " a la torre "+ Destino);

        Hanoi(CantDiscos-1, 6-Posición-Destino, Destino); 

    }
}
Hanoi(4,1,3);