
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;


	var plane_options={
		isStatic: true
	}

	var rotator_options={
		isStatic: true
	}

	var particle_options = {
		restitution:1,
		friction:0.1
	}

	//Crie os Corpos aqui.
    ground = Bodies.rectangle(500, 630, 1000, 50, plane_options);
	World.add(world, ground);

    block1 = Bodies.rectangle(800, 400, 50, 50, plane_options)
	World.add(world, block1);
	block2 = Bodies.rectangle(150, 400, 50 ,50, plane_options)
    World.add(world, block2);
	block3 = Bodies.rectangle(450, 400, 50 ,50, plane_options)
    World.add(world, block3);
	
    rotator1 = Bodies.rectangle(450,200, 150, 20,rotator_options);
	World.add(world, rotator1);

	rotator2 = Bodies.rectangle(450,200,150,20,rotator_options);
	World.add(world, rotator2);

	rotator3 = Bodies.rectangle(450,200,150,20,rotator_options);
	World.add(world, rotator3);

    particle1 = Bodies.circle(450,10,10,particle_options);
	World.add(world,particle1);
	
	particle2 = Bodies.circle(450,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(450,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(450,10,10,particle_options);
	World.add(world,particle4);

	Engine.run(engine);
  
}


var angle1 = 60;

var angle2 = 60;

var angle3 = 60;

function draw() {
  rectMode(CENTER);
  background("skyblue");

  Engine.update(engine);


  fill('white')
  Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=1;

    Matter.Body.rotate(rotator2,angle2);
    push();
	translate(rotator2.position.x,rotator2.position.y);
    rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=2;

    Matter.Body.rotate(rotator3,angle3);
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=3;

	


  fill("white")
   rect(ground.position.x, ground.position.y, 1600, 50);

   rect(block1.position.x, block1.position.y, 200, 40);

   rect(block2.position.x, block2.position.y, 200, 40);

   rect(block3.position.x, block3.position.y, 200, 40);



  fill("white")
   ellipse(particle1.position.x, particle2.position.y, 30, 30);

   ellipse(particle2.position.x, particle2.position.y, 30, 30);

   ellipse(particle3.position.x, particle3.position.y, 30, 30);

   ellipse(particle4.position.x, particle4.position.y, 30, 30);


  drawSprites();
 
}



