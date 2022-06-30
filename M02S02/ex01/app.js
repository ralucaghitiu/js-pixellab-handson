// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $body = $('body');
const $p = $('<p></p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf',
  class: 'clase de css',
});
$p.appendTo($body);

const $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});
$body.append($p2);

setTimeout(function () {
  $p2.addClass('error');
}, 5000);

$('#myParagraph').text('Am schimbat dinamic');

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p2);

const $container = $('.container');
$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);

const $navigation = $('<div>', {
  class: 'navigation',
});

$container.after($navigation);

const $firstLink = $('<a>', {
  text: 'First Link',
  class: 'nav-link',
  title: 'First Link',
  href: 'https://google.com',
}).appendTo($navigation);

$firstLink.before(
  $('<h2>', {
    text: 'Navigatie',
  }),
);

$firstLink.prepend(
  $('<sup>', {
    text: 1,
    style: 'text-decoration: none',
  }),
);

$container.before(
  $('<h1>', {
    text: 'jQuery is old',
  }),
);
