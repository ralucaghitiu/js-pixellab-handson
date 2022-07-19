document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.box');
  const applyButton = document.querySelector('.applyButton');
  const animationClassName = 'animate-class';
  const darkColorButton = document.querySelector('.darkBackgroundColor');

  darkColorButton.addEventListener('click', () => {
    box.setAttribute('style', 'background-color:#000');
  });
});

applyButton.addEventListener('click', function () {
  box.classList.toggle(animationClassName);
  if (box.classList.contains(animationClassName)) {
    this.innerText = 'Elimina';
    this.title = 'Elimina';
  } else {
    this.innerText = 'Aplica';
    this.title = 'Aplica';
  }
});

// setTimeout(function () {
//   // this is a callback
//   box.classList.add(animationClassName);

//   setTimeout(function () {
//     // this is another callback

//     box.classList.remove(animationClassName);
//   }, 2000);
// }, 2000);

//  "this" points to the element
// if (box.classList.contains(animationClassName)) {
//   box.classList.remove(animationClassName);
//   this.innerText = 'Aplica';
//   this.title = 'Aplica';
// } else {
//   box.classList.add(animationClassName);
//   this.innerText = 'Elimina';
//   this.title = 'Elimina';
// }
