const person = {
  getName: function () {
    return 'Raluca Ghitiu';
  },
  getAge: () => {
    return 33;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);
const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);
const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);
console.log(`'${personBirthYear.toString().slice(-2)}`);
