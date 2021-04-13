
/*  
 var somma = 0;

for(i=0; i<5; i++){
    var numero = parseInt(prompt("inserisci un numero"));
    somma += numero++;
}

document.getElementById("somma-for").innerHTML= "la somma dei tuoi numeri è " + somma;  */

 

var n = 5; 
var somma_ = 0;
var cont = 0;

while(cont < n){
    var numero = parseInt(prompt("inserisci un numero"));
    cont++;
    somma_+=numero;
    
}


document.getElementById("somma-while").innerHTML= "la somma dei tuoi numeri è " + somma_;








