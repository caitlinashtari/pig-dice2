/* backend ------------*/
var roll1;
var roll2;
var roll3;
var roll4;


function Player () {
  this.score = 0;
  this.active = true;
}

var roll = function (){
  return Math.floor(Math.random() * 6) + 1;
}


/* frontend ------------*/
$(document).ready(function(){
  var clicks = 0;
  $("button.btn").click(function(){
    if(clicks === 0){
    var player = new Player();
    roll1 = roll();
    roll2 = roll();
    Player.score = roll1 + roll2;
  } else {
    roll3 = roll();
    roll4 = roll();
    Player.score = Player.score + roll3 + roll4;

  }
  ++clicks;

});







});
