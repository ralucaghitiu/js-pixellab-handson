var i = 1;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Ce se intampla daca i este initializat cu valoarea 101?
// while (i < 100) {
//   console.log(i);

//   i++;
// }

//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// while (i < 100) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 67.
// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// while (i < 67) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
// while (i < 100) {
//   console.log(i);

//   if (i >= 12) {
//     break;
//   }
//   i++;
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
// while (i <= 32) {
//   if (i % 2 !== 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
var i = 0;
var currentNumber = 5;
var warningMessage = 'Nu ai introdus un numar';
var number = prompt('Introdu un numar');
var maxlimit = prompt('Care este limita superioara?');

if (number === null || number.trim().length === 0) {
  console.warn(warningMessage);
  number = currentNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn(warningMessage);
  number = currentNumber;
}
while (i <= maxlimit) {
  if (i % number !== 0) {
    i++;
    continue;
  }
  console.log(`Acest numar este multiplu de ${number}`);
  i++;
}
