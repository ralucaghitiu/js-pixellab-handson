var userName = prompt('Cum te cheama?');
var userNameParagraph = document.getElementById('userName');
var characterCountParagraph = document.getElementById('characterCount');
var characterCount = userName.replaceAll(' ', '').length;

userNameParagraph.innerText = `Ma numesc ${userName}`;
characterCountParagraph.innerText = `Numele introdus are ${characterCount} caractere.`;
