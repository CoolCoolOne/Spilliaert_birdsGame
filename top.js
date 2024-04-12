
let r, g, b;
let x, y;
let timeSpended = 0;

orig_bird_width = 400;
orig_bird_higth = 300;

function drawBirds(){
  image(bird01, 650, 365, 40, 30, 0, 0, orig_bird_width, orig_bird_higth, CONTAIN);
    image(bird02, 150, 390, 40, 30, 0, 0, orig_bird_width, orig_bird_higth+60, CONTAIN);
    image(bird03, 750, 590, 40, 30, 0, 0, orig_bird_width, orig_bird_higth, CONTAIN);
    image(bird04, 100, 710, 40, 30, 0, 0, orig_bird_width, orig_bird_higth, CONTAIN);
    image(bird05, 450, 595, 40, 30, 0, 0, orig_bird_width, orig_bird_higth, CONTAIN);
    image(bird06, 890, 325, 40, 30, 0, 0, orig_bird_width, orig_bird_higth, CONTAIN);
}

function preload() {
    img = loadImage('./imgs/spilliart_transparrent.png');
    bird01 = loadImage('./imgs/duatel.png');
    bird02 = loadImage('./imgs/happy_one.png');
    bird03 = loadImage('./imgs/sinitsa.png');
    bird04 = loadImage('./imgs/soroca.png');
    bird05 = loadImage('./imgs/voroba.png');
    bird06 = loadImage('./imgs/winter_bird.png');
  }

function setup() {
    createCanvas(1000, 800);
    // Draw the image.
    background(277, 224, 208);
    r= random(0, 200);
    g= random(0, 200);
    b= random(0, 200);
    // image(img, 0, 0, width, height, 0, 0, 1200, 848, COVER);
  }
  
  function draw() {
    // background(277, 224, 208);
    r= random(0, 200);
    g= random(100, 200);
    b= random(200, 200);
    x= random(0, 1200);
    y= random(0, 848);
    noStroke();
    timeSpended++;
    if (timeSpended < 1000) {
      fill (r, g, b, 20);
      circle (x, y, 120);
      image(img, 0, 0, width, height, 0, 0, 1200, 848, COVER);
      drawBirds()
    } else if (timeSpended < 1500) {
      fill (165, 42, 42, 20);
      circle (x, y, 140);
      image(img, 0, 0, width, height, 0, 0, 1200, 848, COVER);
      drawBirds()
    } else if (timeSpended < 2000) {
      fill (0, 0, 0, 10);
      circle (x, y, 350);
    } else {}

  }

//   function mouseIsPressed(){
//     fill (r, g, b, 20);
//     circle (MouseX, MouseY, 70);
//   };