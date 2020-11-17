//Si son las 10am ¿qué horas serán en 2500 hrs?
const n = 2500;
var h = n%12;
const hora = 10;
t = ["am", "pm"];
h = h + hora;

if(h >= 13){
    h = h - 12;
    console.log('Si son las 10 am, en '+n+' horas serían las: '+h+' '+t[1]);
}

else{
    if(h == 12){

        console.log('Si son las 10 am, en '+n+' horas serían las: '+h+' '+t[1]);
    }
    else{
    console.log('Si son las 10 am, en '+n+' horas serían las: '+h+t[0]);
}
}
