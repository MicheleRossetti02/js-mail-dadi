// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const mail = [
    'michelerossetti@gmail.com',
    'boolean@gmail.com',
    'mariorossi@gmail.com',
    'google@gmail.com',
    'Mandalorean@gmail.com',
    'serietv@gmail.com'
]

const userMail = prompt('digita la tua mail');

if(userMail.length== mail.length){
    mail.push(userMail);
    console.log('la tua mail è stata aggiunta correttamente');
} else {
    console.log('la tua mail non è stata aggiunta correttamente');
}
console.log(userMail);







// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
