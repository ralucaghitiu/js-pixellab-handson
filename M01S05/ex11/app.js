console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. (Foloseste structura switch).
`);
function calculateSurface(L, l, h) {
  switch (arguments.length) {
    case 1:
      return L ** 2;
      break;
    case 2:
      return L * l;
      break;
    case 3:
      const parallelipipedSurface = 2 * (L * l + L * h + l * h);
      return parallelipipedSurface;
      break;
  }
}

calculateSurface(2);
calculateSurface(6, 7);
calculateSurface(20, 15, 5);

console.log(
  `Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `,
);
function calculateCircleArea(circleRadius) {
  return Math.PI * circleRadius ** 2;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);

const pet = {
  getName: () => {
    return 'Lessie';
  },
  getSpecies: () => {
    return 'dog';
  },
  getAge: () => {
    return 8;
  },
};
//  cerinta a
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

//  cerinta b
const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
