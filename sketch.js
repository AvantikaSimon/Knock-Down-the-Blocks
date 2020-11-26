const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var stand1, stand2, stand3
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,  block11, block12, block13, block14, block15, block16, block17, block18, block19, block20
var polygon
var number = 1

function setup() {
  createCanvas(800,500);

  stroke(252, 246, 80);
  polygon = Matter.Bodies.Polygon(50, 250, 5, 50)
  
  stroke(6, 7, 7);
  stand1 = new Ground(350, 200, 100, 10);
  stand2 = new Ground(700, 400, 80, 10);
  stand3 = new Ground(680, 210, 100, 10)

  stroke(53, 179, 252);
  block1 = new Box(300, 290, 35, 35);
  block2 = new Box(345, 290, 35, 35);
  block3 = new Box(390, 290, 35, 35);
  block4 = new Box(435, 290, 35, 35);

  stroke(6, 226, 83);
  block5 = new Box(325, 250, 35, 35);
  block6 = new Box(370, 250, 35, 35);
  block7 = new Box(415, 250, 35, 35);

  stroke(170, 98, 252)
  block8 = new Box(350, 210, 35, 35);
  block9 = new Box(395, 210, 35, 35);

  stroke(249, 75, 12);
  block10 = new Box(370, 170, 35, 35);

  stroke(249, 104, 32);
  block11 = new Box(680, 180, 80, 20);

  stroke(247, 180, 64);
  block12 = new Box(680, 150, 50, 25);

  stroke(255, 167, 79);
  block13 = new Box(680, 100, 30, 30);

  stroke(252, 181, 111);
  block14 = new Box(680, 50, 20, 20);

  stroke(152, 97, 170);
  block15 = new Box(300, 80, 20, 20);

  slingShot = new SlingShot(polygon.body, {x:50, y:255});
  

}

function draw() {
  background("white")
  Engine.update(engine);

  polygon.display(); 

  stand1.display();
  stand2.display();
  stand3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
