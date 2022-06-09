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

console.warn(
  `Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”`,
);
const personFirstName = accessor('Name');
console.log(`Eu sunt ${personFirstName}.`);
