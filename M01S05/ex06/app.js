const person = {
  getName: function () {
    return ' Raluca Ghitiu';
  },
  getAge: function () {
    return 33;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // return person.getName
  // return person.getAge
  return person[methodName]();
}
const personFirstName = accessor('Name');
const birthYear = new Date().getFullYear() - accessor('Age');

console.warn(
  `Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”`,
);
console.log(`Eu sunt ${personFirstName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);
console.log((new Date().getFullYear() - person.getAge()).toString());

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);
console.log(
  `Ma numesc ${personFirstName}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.
`);
console.log(accessor('Name'));

console.warn(`Afiseaza varsta persoanei.
`);
console.log(accessor('Age'));

console.warn(
  `Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”`,
);
console.log(`M-am nascut in ${birthYear}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${personFirstName} si am ${accessor('Age')} ani!`);
