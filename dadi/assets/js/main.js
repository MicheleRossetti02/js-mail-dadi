// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.






// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const x = Math.floor(Math.random() * 6)+1; // Numero  random tra 1 e 6
console.log(x);
const y =  Math.floor(Math.random() * 6)+1; // Numero  random tra 1 e 6
console.log(y);

if(x > y){
    console.log('Ha vinto il computer');
} else if(x < y){
    console.log('Ha vinto il giocatore');
} else {
    console.log('Parità');
}
