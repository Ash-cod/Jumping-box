var canvas;
var music;
var surface1, surface2, surface3, surface4;



function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 400);

    //create 4 different surfaces
    surface1 = createSprite(0, 380, 360, 30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(295, 380, 200, 30);
    surface2.shapeColor = "green";

    surface3 = createSprite(510, 379, 200, 30);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(730, 379, 200, 30);
    surface4.shapeColor = "orange";

    //create box sprite and give velocity
    box = createSprite(random(20,750),100, 50, 50);
    box.shapeColor = "red";
    box.velocityY = 8;
    box.velocityX = 9;
}

function draw() {
    background(rgb(169, 169, 169));
    var edges = createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="blue";
    }

    if(surface2.isTouching(box)){
        box.shapeColor="green";
        box.setVelocity(0,0);
    }

    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor="yellow";
        music.stop();
    }

    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor="orange ";
        music.play();
    }

    drawSprites();
   
}
