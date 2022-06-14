const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const querryButton = document.getElementById('query');
const messageParagraph = document.getElementById('message');
const eventListener = () => {
  alert('ai apasat butonul');
};

button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});

querryButton.addEventListener('click', function () {
  const askAge = prompt('Ce varsta ai?');
  const message = `Ai ${askAge} ani.`;

  console.log(message);
  messageParagraph.innerText = message;
});
