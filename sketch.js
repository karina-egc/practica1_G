function setup() {
  //creates a canvas 600 pixels wide
  //and 400 pixels high
  createCanvas(650, 400);
}
function draw() {
  //sky blue background
  background(36, 40, 97);
  //sun in top-right corner
  fill(105, 106, 128);
  circle(550, 50, 100);
 
  //grass on bottom half
  fill('green');
  rect(0, 200, 650, 200);
 
  //emojis
  textSize(75)
  text("🎃", 60, 250) 
  text("🐞", mouseX-50, mouseY+20) //ladybug
  text("🐈‍⬛", mouseY-50,mouseX+20)
  text("🌳", 180, 200) 
}