var s;
var scl = 20;
var food;
var passingstars=[];	
var img;
var img2;
var bg;
var touch = [];
var start;
var bubbles = [];


function preload() {

        img = loadImage('images/star.png');
       
        touch[0] = loadImage('images/star0.png');
    
        touch[1] = loadImage('images/moon.png');
        
        touch[2] = loadImage('images/earth.png');
    
        touch[3] = loadImage('images/asteroid.png');
            
        touch[4] = loadImage('images/rocket.png');
    
        touch[5] = loadImage('images/greenstar.png');
    
        touch[6] = loadImage('images/darkstar.png');



    
    	img2 = loadImage('images/goldstar.png');

}


function setup (){
    createCanvas(800, 800);
    s = new Snake();
    frameRate(10);
    pickLocation();
    
      slider = createSlider(-24,-2,-2,1);

    
	   for(var i=0; i<20; i++){
        var star =  new Star(25, 25);
        passingstars.push(new Star(random(800), random(800)));
    }
    
            
        var button = select('#button');
        button.mousePressed(stopMotion);

        var button = select('#button2');
        button.mousePressed(startMotion);
      
        start=true;
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    
}

function mousePressed() {
    var r = floor(random(0, touch.length));
    var b = new Bubble(mouseX, mouseY, touch[r]);
    bubbles.push(b);
    touch[0].resize(30,0);
    touch[1].resize(30,0);
    touch[2].resize(50,0);
    touch[3].resize(50,0);
    touch[4].resize(40,0);
    touch[5].resize(40,0);
    touch[6].resize(40,0);
    
    }

function draw() {
    background(0);
    	for(var i = 0; i<20; i++) {
        if (start==true)
       passingstars[i].move();
        
	   passingstars[i].show();
	   }
    
    s.update();
    s.show();
    
    if (s.eat(food)){
        pickLocation();
        
    }
    
    fill(253, 13, 181);
    rect(food.x, food.y, scl, scl);

for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
 }
    
}




function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0,-1);
    } else if (keyCode === DOWN_ARROW){
       s.dir(0,1); 
    } else if (keyCode === RIGHT_ARROW){
       s.dir(1,0); 
    } else if (keyCode === LEFT_ARROW){
       s.dir(-1,0); 
    }
}

function Star(x, y) {
	this.x = x;
	this.y = y;

	this.show = function() {
		image(img, this.x, this.y, 25, 25);
	};

	this.move = function() {
                  (slider.value(),-100,100);
          this.x += slider.value();

          if(this.x<-10){
            this.x=710;
          }

        
        }
}

function stopMotion() {
  start = false;
}

function startMotion() {
  start = true;
}
