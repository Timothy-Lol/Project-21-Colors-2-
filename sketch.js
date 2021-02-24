var canvas;
var music;
var bblock,rblock,gblock,bbblock;
var box;
var bell;
var edges;

function preload(){
    music = loadSound("music.mp3");
    bell = loadSound("bell.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    bblock = createSprite(100,550,200,20);
    bblock.shapeColor = "blue";

    rblock = createSprite(300,550,200,20);
    rblock.shapeColor = "red";

    gblock = createSprite(500,550,200,20);
    gblock.shapeColor = "green";

    bbblock = createSprite(700,550,200,20);
    bbblock.shapeColor = "black";
   //create box sprite and give velocity
    box = createSprite(random(20,750),20,20,20);
    box.velocityY = 4;
    box.velocityX = 4;
    box.shapeColor = "black"

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(bblock.isTouching(box) && box.bounceOff(bblock)){
        box.shapeColor = "blue";
        bell.play();
    }
    if(rblock.isTouching(box)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(gblock.isTouching(box) && box.bounceOff(gblock)){
        box.shapeColor = "green";
        bell.play();
    }
    if(bbblock.isTouching(box) && box.bounceOff(bbblock)){
        box.shapeColor = "black";
        bell.play();
    }

    drawSprites();
}
