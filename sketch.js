var database,foodStock;
var dog,dogImage,doghappy;

function preload(){

  dogHappy=loadImage("images/dogImg1.png")  
  dogImg=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500)
  database=firebase.database()
foodStockRef=database.ref('Food')
foodStockRef.on("value",readStock);
dog=createSprite(250,250,10,10);
dog.addImage(dogImg)
dog.scale=0.5
}


function draw() {  
background(46,139,87)
fill("red")
textSize(20)
text("Food: "+foodStock,250,50)



if(keyWentDown(UP_ARROW)){
  writeStock(foodStock)
  dog.addImage(dogHappy)
}
if(keyWentUp(UP_ARROW)){
  writeStock(foodStock)
  dog.addImage(dogImg)
}

  drawSprites();
}
function readStock(data){
  foodStock=data.val()
}
function writeStock(x){
if(x<=0){
  x=0
}else{
x=x-1;

}

  database.ref('/').update({
    Food:x
  })
}
function errorData(){
  console.error("error,readingData");
}




