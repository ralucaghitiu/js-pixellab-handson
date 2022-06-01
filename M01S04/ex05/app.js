var defaultNumber = 2;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var i = 0;
var number = prompt('Introdu un numar');
number = number.trim();

if (number === null || number.length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
}

for (i = 6; i <= 100; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
}

// slide2

// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000.
for (i = 0; i <= 1000; i++) {
  if (i % number !== 0) {
    continue;
  }
  console.log(i);
  console.log(`Acest numar este multiplu de ${number}.`);
}

// Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.
maxNumber = prompt(
  `Introdu limita superioara pana la care vrei sa afli multiplii pentru numarul ales`,
);

for (i = 0; i <= maxNumber; i++) {
  if (i % number !== 0) {
    continue;
  }
  console.log(i);
  console.log(`Acest numar este multiplu de ${number}.`);
}
