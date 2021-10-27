let bounceAmount, bounceRate, previousRotation;

class Part {
  constructor(
    name,
    img,
    posX,
    posY,
    width,
    height,
    rotation,
    isRight,
    isDown,
    color
  ) {
    this.name = name;
    this.img = img;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.rotation = rotation;
    this.isRight = isRight;
    this.isDown = isDown;
    this.color = color;

    bounceAmount = 10 + random(20);
    print("bounceAmount: " + bounceAmount);
    bounceRate = random(-0.05, 0.05);
    print("bounceRate: " + bounceRate);

    if (isRight == false) {
      bounceRate = -bounceRate;
    }

    // if (isRight == true) {
    //   bounceRate = .02;
    // } else {
    //   bounceRate = -.02;
    // }

    previousRotation = this.rotation;
  }

  show() {
    push();

    p5graphics.translate(this.posX, this.posY);

    if (this.isRight == false) {
      scale(-1, 1);
    }
    if (this.isDown == false) {
      scale(1, -1);
    }

    if (this.name == "flower") {
      this.bounce();
    }

    p5graphics.image(this.img, 0, 0, this.width, this.height);

    pop();
  }

  bounce() {
    let b = previousRotation + bounceRate;
    p5graphics.rotate(b);
    previousRotation = b;
    if (abs(previousRotation) >= bounceAmount) {
      bounceRate = -bounceRate;
    }
  }
}