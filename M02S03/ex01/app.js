class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    return this;
  }

  displaySpeed(targetSelector = '.message') {
    let element = document.querySelector(targetSelector);

    if (element === null) {
      element = document.createElement('p');
      element.classList.add(targetSelector.replace('.', ''));
      document.body.append(element);
    }
    element.innerText = this.speed;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

console.log(audi.speed);

audi.displaySpeed();

audi.accelerate(12).decelerate(3).decelerate(4);

audi.displaySpeed();

audi.setSpeed(4).accelerate(5);

audi.displaySpeed();
