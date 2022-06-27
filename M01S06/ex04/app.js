/**
 * Folosind exemplul de la exercitiul 2, afiseaza mesajul
 * intr-un paragraf in loc de consola. Inainte de a adauga
 * elementul in DOM adauga-i clasa message. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 *  Creaza o functie numita showMessage() pe care
 * sa o chemi de fiecare data cand vrei sa afisezi un paragraf in DOM
 */

(function () {
  function showMessage(message) {
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('message');
    paragraphElement.innerText = message;

    document.body.append(paragraphElement);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena.';
      showMessage(message);
      console.log(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul nu este pe scena.';
      showMessage(message);
      console.log(message);
    });
  });
})();
