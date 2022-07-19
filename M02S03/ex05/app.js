document.addEventListener('DOMContentLoaded', function () {
  const debounce = throttleDebounce.debounce;
  let oldWidth = window.innerWidth;
  let oldHeight = window.innerHeight;
  showMessage(oldWidth, 'message');
  showMessage(oldHeight, 'message2');
  showMessage(windowSurface(oldWidth, oldHeight), 'message3');

  // recipe
  const debouncedResize = debounce(1000, function () {
    const newWidth = this.innerWidth;
    const newHeight = this.innerHeight;
    showMessage(this.innerWidth.toString());
    showMessage(this.innerHeight.toString());
    showMessage(
      `Fereastra are acum suprafata de ${windowSurface(
        newHeight,
        newWidth,
      )} pixeli.`,
      'message4',
    );

    if (oldWidth !== newWidth) {
      showMessage(`Fereastra si-a schimbat latimea. ${newWidth}`, 'message5');
      oldWidth = newWidth;
    }
    if (oldHeight !== newHeight) {
      showMessage(
        `Fereastra si-a schimbat inaltimea: ${newHeight}`,
        'message6',
      );
      oldHeight = newHeight;
    }
  });

  window.addEventListener('resize', debouncedResize);

  // hoising
  function showMessage(message, className = 'message') {
    let paragraphElement = document.querySelector('.' + className);
    if (paragraphElement === null) {
      paragraphElement = document.createElement('p');
      paragraphElement.classList.add(className);
      document.body.append(paragraphElement);
    }
    paragraphElement.innerText = message;
  }
  function windowSurface(width, height) {
    return width * height;
  }
});
