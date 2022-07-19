// se incarca pagina sub 500
// ul.style.display=none
// addEventListener pe h1 (afiseaza/ascunde lista)

// se incarca pagina peste 500
// nu se intampla nimic

// se redimensioneaza pagina sub 500
// ul.style.display=npne
// addEvenListener pe h1 (afiseaza/ascunde lista)

// se redimenseioneaza pagina peste 500
// ul.style.display=block;
// removeEventLIster de pe h1

// resize
document.addEventListener('DOMContentLoaded', function () {
  const headerElement = document.querySelector('.title');
  const ulElement = document.querySelector('.linksList');
  const onClick = function () {
    if (ulElement.style.display === 'none') {
      ulElement.style.display = 'block';
    } else {
      ulElement.style.display = 'none';
    }
  };

  if (window.innerWidth < 500) {
    ulElement.style.display = 'none';
    headerElement.addEventListener('click', onClick);
  }

  window.addEventListener('resize', function () {
    const width = this.innerWidth;

    if (width >= 500) {
      ulElement.style.display = 'block';
      headerElement.removeEventListener('click', onClick);
    }

    if (width < 500) {
      ulElement.style.display = 'none';
      headerElement.addEventListener('click', onClick);
    }
  });
});

// MatchMedia;
// const ulElement = document.querySelector('.linksList');
// const headerElement = document.querySelector('.title');
// const mediaQueryString = '(max-width: 500px)';
// const mediaQueryList = window.matchMedia(mediaQueryString);

// function onClick() {
//   if (ulElement.style.display === 'none') {
//     ulElement.style.display = 'block';
//   } else {
//     ulElement.style.display = 'none';
//   }
// }

// if (mediaQueryList.matches) {
//   ulElement.style.display = 'none';
//   headerElement.addEventListener('click', onClick);
// }

// mediaQueryList.addEventListener('change', function (event) {
//   const matches = event.matches;

//   if (matches === true) {
//     ulElement.style.display = 'none';
//     headerElement.addEventListener('click', onClick);
//   } else {
//     headerElement.removeEventListener('click', onClick);
//     ulElement.style.display = 'block';
//   }
// });
