const stage = document.querySelector('.stage');
let stageAppearances = 0;
let stageLine = 0;

stage.addEventListener('mouseover', function () {
  // "this" este elementul de DOM
  const message = 'Mouseul este pe scena';

  // console.log(message);
  showMessage('.message', message);
  displayCount(`Mouseul a fost pe scena de ${++stageAppearances} ori.`);
  displayLineCount(`Mouseul a trecut peste linie de ${++stageLine} ori.`);
});

stage.addEventListener('mouseout', function () {
  const message = 'Mouseul NU este pe scena';

  showMessage('.message', message);
  displayLineCount(`Mouseul a trecut peste linie de ${++stageLine} ori.`);
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

let counterElement = document.querySelector('counter');
function displayCount(message = '') {
  if (counterElement === null) {
    counterElement = document.createElement('p');
    counterElement.classList.add('counter');
    counterElement.innerText = message;

    document.body.append(counterElement);

    return;
  }

  counterElement.innerText = message;
}

let countLine = document.querySelector('.counterLine');

function displayLineCount(message = '') {
  if (countLine === null) {
    countLine = document.createElement('p');
    countLine.classList.add('.counterLine');
    countLine.innerText = message;

    document.body.append(countLine);

    return;
  }

  countLine.innerText = message;
}
