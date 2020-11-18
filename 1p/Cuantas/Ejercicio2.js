//En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, cuantos saludos ocurrieron?
var invitados = 3;
var facto = invitados;
var resultado = facto;
var i = facto-1;
var mFac, nFac, sFac;
//Función Factorial

function fact(resultado, i){
while(i>1){

    resultado = resultado * i;
    i--;
}
return resultado;
}   
    nFac = fact(resultado, i);
    //factorial 
    facto = 2;
    resultado = facto;
    i = facto-1;

    mFac = fact(resultado, i)

    facto = invitados - 2;
    resultado = facto;
    i = facto-1;

    sFac = fact(resultado, i);

    //Se usa la fórmula = N!/(M! *(N-M)!)
     console.log('Si en una fiesta de ['+invitados+'] invitados, cada uno saluda a los demás. Serían un total de ['+(nFac)/(mFac*sFac)+'] saludos.');