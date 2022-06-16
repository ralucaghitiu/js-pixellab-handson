const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const messsage = 'Nu stim ce browser folosesti';
const browserName = '';

paragraphElement.innerText = messsage;

document.body.append(paragraphElement);

// tema

if (userAgentString.includes('firefox')) {
  messsage = 'Navighez folosind Firefox';
}

setTimeout(() => {
  const userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  const headingElement = document.createElement('h1');
  const message = `Salut ${userName}!`;

  headingElement.innerText = message;

  document.body.append(headingElement);

  setTimeout(() => {
    paragraphElement.remove();
  }, 3000);
}, 3000);
