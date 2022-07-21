// Folosind metoda writeFileSync() scrie intr-un fisier
// numit my-file.txt textul: “Invat node.js”
// Folosind ambele metode de citit si de scris,
// citeste textul scris in my-file.txt si adauga-i
//  data curenta astfel incat sa poti scrie
//   intr-un alt fisier (nume la alegere)
// “Invat node.js, azi, zz.ll.aaaa!”
// Atentie la punctuatie. Foloseste template strings.

const fs = require('fs');

const message = 'Invat node.js';
fs.writeFileSync('./my-file.txt', message, 'utf-8');

const data = fs.readFileSync('./my-file.txt', 'utf8');
const newMessage = `${data}, azi, ${new Date().getDate()}`;
fs.writeFileSync('./a.txt', newMessage, 'utf-8');
