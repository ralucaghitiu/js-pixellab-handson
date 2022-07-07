class Car {
  areLightsOn = false;
  intervalId = 0;
  initialLightState = false;

  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    return this;
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    return this;
  }

  turnLightsOn() {
    this.lightFront.style.backgroundColor = 'yellow';
    this.lightBack.style.backgroundColor = 'red';

    this.areLightsOn = true;

    return this;
  }

  turnLightsOff() {
    this.lightFront.style.backgroundColor = 'white';
    this.lightBack.style.backgroundColor = 'white';

    this.areLightsOn = false;

    return this;
  }

  toggleHazards() {
    const self = this;

    if (self.intervalId !== 0) {
      clearInterval(self.intervalId);
      self.intervalId = 0;

      if (self.initialLightState === true) {
        self.turnLightsOn();
      } else {
        self.turnLightsOff();
      }

      return;
    }

    self.initialLightState = self.areLightsOn;

    self.intervalId = setInterval(function () {
      if (self.areLightsOn === true) {
        self.turnLightsOff();
      } else {
        self.turnLightsOn();
      }
    }, 1000);

    return self;
  }

  changeWheelColor(wheelColor) {
    this.wheelColor = wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.wheelBack.style.backgroundColor = this.wheelColor;
  }
  changeHubCapColor(hubCapColor) {
    this.hubCapColor = hubCapColor;
    this.hubCapFront.style.backgroundColor = this.hubCapColor;
    this.hubCapBack.style.backgroundColor = this.hubCapColor;
  }

  engageBreak() {
    this.lightBack.style.backgroundColor = 'red';

    return this;
  }

  disengageBreak() {
    this.lightBack.style.backgroundColor = 'white';

    return this;
  }

  render() {
    document.body.append(this.frame);

    return this;
  }
}

const car01 = new Car(300, 16, 'teal').render().turnLightsOn();

const car02 = new Car(100, 200, 'blue');
car02.render();
car02.changeWheelColor('magenta');
car02.changeHubCapColor('green');
