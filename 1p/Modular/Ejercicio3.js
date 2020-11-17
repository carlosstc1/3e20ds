//Qué día sería en 11 días, Si hoy es lunes.
var count = 0;
const x = 11;
var day = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for(var i = 0; i < x; i++){
        if(i%7==0||i==7){
            count = 0;
        }
        else{
            count++
        }
        
    }
    console.log('Si fuera Lunes, en '+x+ ' días sería: '+day[count]);
