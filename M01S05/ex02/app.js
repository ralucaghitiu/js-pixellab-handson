function calculateRectangleArea(L, l) {
  return L * l;
}

const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9`,
);

console.log(calculateRectangleArea(12, 9));
