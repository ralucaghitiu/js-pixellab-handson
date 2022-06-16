const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const messsage = 'Nu stim ce browser folosesti';

if (userAgentString.includes('chrome')) {
  messsage = 'Navighez folosing Chrome';
}

paragraphElement.innerText = messsage;

document.body.append(paragraphElement);
