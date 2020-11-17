//Si son las 10am ¿qué horas fueron hace 2500hrs?
const n = 2500;
var h = n%12;
const hora = 10;
t = ["am", "pm"];
h = hora-h ;

if(h >= 13){
    h = h - 12;
    console.log('Si son las 10 am, hace '+n+' horas eran las: '+h+' '+t[1]);
}

else{
    if(h == 12){

        console.log('Si son las 10 am, hace '+n+' horas eran las: '+h+' '+t[1]);
    }
    else{
    console.log('Si son las 10 am, hace '+n+' horas eran las: '+h+t[0]);
}
}
