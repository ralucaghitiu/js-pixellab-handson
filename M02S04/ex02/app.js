// studiu:
const buttons = document.querySelectorAll('button');
const boxes = document.querySelectorAll('.box');
const colorInput = document.querySelector('.dynamicColorForm input');
const removeButton = document.querySelector('.thirdButton');
const radioButtons = document.querySelectorAll('.radioButton');

// array-like object
buttons.forEach(function (button) {
  const textColor = button.innerText.toLowerCase();

  button.style.backgroundColor = textColor;
});

document.addEventListener('click', function (event) {
  // recipe
  const target = event.target;

  if (target.classList.contains('thirdButton')) {
    return;
  }

  if (target.nodeName === 'BUTTON' && target.type === 'button') {
    // box.style.backgroundColor = target.style.backgroundColor;
    for (const radioButton of radioButtons) {
      if (radioButton.type === 'radio' && radioButton.checked) {
        const parent = radioButton.parentElement;
        parent.style.backgroundColor = target.style.backgroundColor;
      }

      if (!radioButton.checked) {
        const parent = radioButton.parentElement;
        parent.style.backgroundColor = '';
      }
    }
  }
});

colorInput.addEventListener('change', function () {
  const dynamicButton = this.previousElementSibling;

  dynamicButton.style.backgroundColor = this.value;
  console.log(dynamicButton);
});

colorInput.parentElement.addEventListener('submit', function (event) {
  const dynamicButton = this.querySelector('button[type="button"]');

  dynamicButton.style.backgroundColor = colorInput.value;

  event.preventDefault();
});

removeButton.addEventListener('click', function () {
  boxes.forEach(function (box) {
    box.removeAttribute('style');
  });
});
