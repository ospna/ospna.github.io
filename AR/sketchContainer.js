// create a variable to hold our world object
var world;

// create a variable to hold our marker
var marker;

// create variables to hold each plane
var plane1, plane2, plane3, plane4, plane5;

let p5graphics;

let x1, x2, x3, x4, y1, y2, y3, y4, r, posNeg;

let sprouts;

let parts;

let leaf, flower;

function preload(){
  leaf = loadImage("images/AR Media/fused_leaves-01.svg");
  flower = loadImage("images/AR Media/Radial/radial_pendulus_large-01.svg");
}

function setup() {

    p5graphics = createGraphics(600, 600).id('p5graphics');
    angleMode(degrees);
    createCanvas(600, 600);
    sprouts = [];
    parts = [];
    createVine();

    let rotationRange = 10;
    let p;

    for (let s = 0; s < sprouts.length; s++) {
      p = new Part(
        "leaf",
        leaf,
        sprouts[s][0],
        sprouts[s][1],
        60,
        60,
        -rotationRange + random(2 * rotationRange),
        false,
        true
      );
      parts.push(p);
      p = new Part(
        "leaf",
        leaf,
        sprouts[s][0],
        sprouts[s][1],
        60,
        60,
        -rotationRange + random(2 * rotationRange),
        true,
        true
      );
      parts.push(p);
    }
    //draw flowers separately and after leaves to appear in front
    for (let s = 0; s < sprouts.length; s++) {
      p = new Part(
        "flower",
        flower,
        sprouts[s][0],
        sprouts[s][1],
        60,
        60,
        -rotationRange + random(2 * rotationRange),
        true,
        false
      );
      parts.push(p);
    }

  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker = world.getMarker('patt2');
  marker2 = world.getMarker('hiro');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner

container = new Box({
    x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

marker.addChild( container );

container2 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

marker2.addChild( container2 );

// intent behing this 'container" box was that *it* would rotate to face the camera using a single line of code,
// rather than rotating every plane contained in the box individually.
// but the coordinate system in A-Frame is weird... still haven't figured out how to make the container rotate as expected
// toward the camer, around the Y axis

  plane3 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container.addChild( plane3 );
}


function draw() {

    world.clearDrawingCanvas();

    // get the rotation of the AR marker relative to the camera,
    // which allows us to rotate the objects attached to that marker toward the camera
    let rot = marker.tag.object3D.rotation;
    let rot2 = marker2.tag.object3D.rotation;
    let normalRot = degrees(rot.z);
    let normalRot2 = degrees(rot2.z);// + Math.ceil(-1 * degrees(rot.y) / 360) * 360;


    p5graphics.noFill();
    p5graphics.strokeWeight(4);
    p5graphics.stroke(0, 200, 0);

    p5graphics.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    p5graphics.fill(255);

    for (let s = 0; s < sprouts.length; s++) {
      p5graphics.circle(sprouts[s][0], sprouts[s][1], 5);
      // p5graphics.image(flower, sprouts[s][0], sprouts[s][1], 60, 60);
      // p5graphics.image(leaf, sprouts[s][0], sprouts[s][1], 60, 60);
    }


    // p5graphics.image(flower, sprouts[0][0], sprouts[0][1], 60, 60);

    for (let p = 0; p < parts.length; p++) {
      parts[p].show();
    }

    p5graphics.background(0,0,0,0);

    //plane4.rotateY(plane4.getRotationY()+2);

   //var markerPosition = marker.getScreenPosition();

    //var markerRotation = marker.getRotationY();

    

    // container.rotateY(normalRot);
    // should be able to just rotate the containing box, but it ain't working
    // so have to rotate the individual objects (planes) instead
    

    plane3.rotateY(normalRot);

}

function createVine() {
  x1 = width / 2; // starts in middle near bottom of sketch
  // bezier control points at a random distance from middle to the left or right
  let posNeg = random([-1,1]);
  x2 = width / 2 + random(width / 4) * posNeg; 
  x3 = width / 2 + random(width / 4) * -posNeg;
  x4 = width / 2; // ends in middle a third away from top of sketch
  y1 = height - 20;
  y4 = height - 2 * (height / 3);
  y2 = (y4 - y1) / 3 + y1;
  y3 = y4 - (y4 - y1) / 3;

  let steps = 4; // number of sprout points between bottom-most and top-most point
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    sprouts.push([x, y]);
  }
}

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

    bounceAmount = 1 + random(2, 4);
    print("bounceAmount: " + bounceAmount);
    bounceRate = random(-0.025, 0.025);
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
    p5graphics.push();

    p5graphics.translate(this.posX, this.posY);

    if (this.isRight == false) {
      p5graphics.scale(-1, 1);
    }
    if (this.isDown == false) {
      p5graphics.scale(1, -1);
    }

    // if (this.name == "flower") {
    //   this.bounce();
    // }

    p5graphics.image(this.img, 0, 0, this.width, this.height);

    p5graphics.pop();
  }

  bounce() {
    let b = previousRotation + bounceRate;
    rotate(b);
    previousRotation = b;
    if (abs(previousRotation) >= bounceAmount) {
      bounceRate = -bounceRate;
    }
  }
}