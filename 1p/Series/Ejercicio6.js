let L0 = 2;
let L1 = 1;
let Ln = 1;
for(var i = 1; i<=10; i++){
    console.log(L0);
    Ln = L0 + L1;
    L0 = L1;
    L1 = Ln 
}
