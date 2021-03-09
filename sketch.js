var canvas;
var music;
var box;
var box1;
var box2;
var box3;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
   

    //create 4 different
    box  = createSprite(150, 400, 100, 20);
    box.shapeColor = "green";
    box.velocityY =0;

    //box.debug = true;
    box1 = createSprite(250, 400,80,20);
    box1.shapeColor = "red";
    box1.velocityY = 0 ;

    //box1.debug = true;
    box2 = createSprite(350, 400,90,20);
    box2.shapeColor = "blue";
    box2.velocityY =   0;

    box3 = createSprite(50, 400,80,20);
    box3.shapeColor = "yellow";
    box3.velocityY = 0;

         //create box sprite and give velocity    
        ball = createSprite(random(20,750),100,20,20);  
        ball.shapeColor = "white";     
        ball.velocityX = 5;   
        ball.velocityY = 7;
    
    

     console.log();
}

function draw() {

    background("lightblue");
    //create edgeSprite
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

            box.display();
            box1.display();
            box2.display();
            box3.display();
            ball.display();

    //add condition to check if box touching surface and make it box
    if(box.isTouching(ball) && ball.bounceOff(box)) {
        ball.shapeColor = "green";
        //ball.velocityX = 0;
        //ball.velocityY = 0;
         music.stop();
    }
    if(box1.isTouching(ball)){
        ball.shapeColor = "red";
       
        music.play();

        if(box2.isTouching(ball) && ball.bounceOff(box2)){
            ball.shapeColor = "blue";
    
        }
    
        if(box3.isTouching(ball) && ball.bounceOff(box3)){
            ball.shapeColor = "yellow";
        }
    }


































}
   
