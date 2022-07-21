// old import
// common js
const fs = require('fs');

// Creaza in director un script node
//  care sa citeasca informatii din
//   fisierul file.txt si sa le afiseze in consola

const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(data);
