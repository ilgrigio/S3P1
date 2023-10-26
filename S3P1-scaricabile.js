/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve 
 ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else return a + b;
};
let risultato = crazySum(3, 5);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale 
 parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----BOUNDARY-----");

const boundary = function (numero) {
  if ((numero >= 20 && numero <= 100) || numero === 400) {
    return true;
  } else return false;
};
const numeroIntero = boundary(80);
console.log(numeroIntero);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la 
 ritorna invertita 
 (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----INVERTIRE PAROLA-----");

const reverseString = function (stringa) {
  let string = [];
  let stringaInLettere = stringa.split("");
  //   return stringa.split("").reverse().join("");
  for (let i = stringaInLettere.length - 1; i >= 0; i--) {
    let lettera = stringaInLettere[i];
    string.push(lettera);
  }
  console.log(string);
  return string.join();
};
const parolaInvertita = reverseString("EPICODE");
console.log(parolaInvertita);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la 
 ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-----Prima lettera Maiuscola-----");

const upperFirst = function (stringa) {
  const parole = stringa.split(" "); // ["il", "mondo", "è", "bello", "perchè", "è", "vario"]
  let finale = [];
  for (let i = 0; i < parole.length; i++) {
    finale += parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }
  return finale;
};
console.log(upperFirst("il mondo è bello perché è vario"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato
  n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const giveRandom = function (n = Math.floor(Math.random() * 10) + 1) {
//   return n;
// };
// console.log(giveRandom());
const giveMeRandom = function (n) {
  const arrayNum = [];
  for (let i = 0; i <= n; i++) {
    arrayNum.push(Math.floor(Math.random() * 10) + 1);
  }
  return arrayNum;
};
console.log(giveMeRandom(7));
// Math.floor(); // arrotonda per difetto
// Math.ceil(); // arrotonda per eccesso

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area 
 del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero 
 fornito e 19. Se il valore calcolato è più grande di 19, la funzione deve tornare tale 
 risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare 
 il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come
parametro. La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, 
e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
