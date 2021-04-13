


for(i=1; i<=1; i++){
    var numero_utente = parseInt(prompt("inserisci un numero"));
    if(numero_utente % 2 == 0){
        document.getElementById("num").innerHTML= "il numero è pari: " + numero_utente;
    }else if(numero_utente % 2 !== 0){
        document.getElementById("num").innerHTML= "il numero è dispari più uno: " + [parseInt(numero_utente) + 1];
    }
}