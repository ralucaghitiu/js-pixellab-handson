const calculateRectangleArea = function (L, l) {
  const surface = L * l;

  return surface;
};

console.warn(`Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?
`);
const yield = 25;
const field01Surface = calculateRectangleArea(100, 250);
const field02Surface = calculateRectangleArea(350, 200);
const field01Yield = yield * field01Surface;
const field02Yield = yield * field02Surface;
console.log(field02Yield - field01Yield);

console.warn(
  `Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?`,
);
const beerYield = 2.5 / 10;
const field03Surface = calculateRectangleArea(400, 370);
const fieldYield = yield * field03Surface;
console.log(beerYield * field03Yield);
