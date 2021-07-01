 var database;
 var gamestate=0;
 var playerCount;
 var form,game,playerl
 



  function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.getState();
game.start();


}


  


  
function draw(){}
  
  

