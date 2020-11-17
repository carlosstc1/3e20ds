//Qué día sería hace 11 días, Si hoy es lunes.
var count = 7;
const x = 11;
var day = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for(var i = 0; i < x; i++){
        if(count == 0){
            count = 7;
        }
        else{
            count--
        }

        
    }
    console.log('Si fuera Lunes, en '+x+ ' días sería: '+day[count]);