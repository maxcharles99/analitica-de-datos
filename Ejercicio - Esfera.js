let data = [100, 50, 50, 120, 30];
let x;
let y;


function setup() {
  createCanvas(600, 600);
  x = 50;
  y = height/2;
  background(80);

}

function draw() {
   //background(220);
   let size = map(mouseX, 10, width, 100, 30);
   ellipse(mouseX, mouseY, size, size);
   stroke(255);
  for (let i = 0; i < data.length; i++){
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(x, y, data[i], data[i]);
    x+=100;

  }
}
