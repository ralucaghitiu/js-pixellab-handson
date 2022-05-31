console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

var person = {
  firstName: 'Ana',
  lastName: 'Popescu',
  email: 'anapopescu@gmail.com',
  birthYear: 1980,
  pets: [
    { name: 'Dolly', species: 'dog', age: 3 },
    { name: 'Sia', species: 'cat', age: 2 },
    { name: 'Goldie', species: 'fish', age: 1 },
  ],
  zipCode: '520020',
};

var difference = 0;
var petName = person.pets[0].name;
var firstPetBirthYear = (2022 - person.pets[0].age).toString();

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.`,
);
console.log(
  `Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `,
);
console.log((2022 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);
difference = (2022 - person.birthYear - person.pets[0].age).toString();
console.log(`${difference}`);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

console.warn(
  `Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);
var liprop01 = document.getElementById('prop01');

var prop01 = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

liprop01.innerText = prop01;

console.warn(`Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
`);

var liprop02 = document.getElementById('prop02');

var prop02 = person.pets[0].age - person.pets[2].age;

liprop02.innerText = prop02;

console.warn(
  `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`,
);

var liprop03 = document.getElementById('prop03');

var prop03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

liprop03.innerText = prop03;

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.`,
);

var liprop04 = document.getElementById('prop04');

var dogAge = 2022 - person.pets[0].age;
var catAge = 2022 - person.pets[1].age;
var fishAge = 2022 - person.pets[2].age;

var prop04 = `Animalele mele s-au nascut in ${dogAge}, ${catAge}, respectiv ${fishAge}.`;

liprop04.innerText = prop04;
