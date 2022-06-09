var person = {
  name: 'Raluca',
  surname: 'Ghitiu',
  age: 33,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};
console.warn(`Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive.
`);

for (var i = 0; i < person.friends.length; i++) {
  var xFriend = person.friends[i];

  for (var j = 0; j < person.friends.length; j++) {
    var yFriend = person.friends[j];

    var ageDiff = Math.abs(xFriend.age - yFriend.age);

    if (i === j) {
      continue;
    }

    console.log(
      `Intre ${xFriend.name} si ${yFriend.name} este o diferenta de ${ageDiff} ani.`,
    );
  }
}
