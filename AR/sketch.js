let x1, x2, x3, x4, y1, y2, y3, y4, r, posNeg;

let sprouts;

let parts;

let leaf, flower;

function preload() {
  leaf = loadImage("images/AR Media/unfused_leaves-01.svg");
  flower = loadImage("images/AR Media/Radial/radial_pendulus_large-01.svg");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  sprouts = []; // tracks sprount points along vine
  parts = []; // tracks parts growing from vine: leaves and flowers
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
}

function draw() {
  background(20, 20, 40);
  noFill();
  strokeWeight(4);
  stroke(0, 200, 0);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  //sprouts [0] = [x1, y1];
  fill(255);

  // draw circles at sprout points
  // for (let s = 0; s < sprouts.length; s++) {
  //   circle(sprouts[s][0], sprouts[s][1], 5);
  // }

  // calls method in 'parts' objects to draw and move leaves and flowers
  for (let p = 0; p < parts.length; p++) {
    parts[p].show();
  }
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