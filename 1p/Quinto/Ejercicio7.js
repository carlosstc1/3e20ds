//Quinto Renglón del Triangulo de Pascal
var num = 1;
const x = 5;
var array = [];
for(r=0;r<=x;r++){

    if(r==x){
        for(i=0;i<=r;i++){
            array[i] = num;
            num=num*(r-i)/(i+1);
        }
    }
}
console.log('El quinto renglón de el triángulo de pascal es: ['+array+']');
