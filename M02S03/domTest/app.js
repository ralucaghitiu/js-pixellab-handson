const element = document.createElement('h1');
element.innerText = 'Hello NYC';

const container = document.querySelector('.container');

container.prepend(element);
