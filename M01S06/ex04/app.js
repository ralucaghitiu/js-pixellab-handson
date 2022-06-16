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
