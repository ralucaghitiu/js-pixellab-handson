const stage = document.querySelector('.stage');

stage.addEventListener('mouseover', function () {
  // "this" este elementul de DOM
  const message = 'Mouseul este pe scena';

  // console.log(message);
  showMessage('.message', message);
});

stage.addEventListener('mouseout', function () {
  const message = 'Moseul NU este pe scena';

  showMessage('.message', message);
});

const showMessage = (targetSelector = '.message', message) => {
  let element = document.querySelector(targetSelector);

  if (element === null) {
    // jQUery avea .text()....
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.innerText = message;
};
