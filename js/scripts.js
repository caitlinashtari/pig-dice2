/* backend ------------*/
var roll1;
var roll2;
var roll3;
var roll4;
var player1;
var player2;

//constructor function for player
function Player () {
  this.score = 0;
  this.active = false;
}
//this is just so i can visualize the player objects that are created
// player1 = {
//   this.score = 0;
//   this.active = true;
// }
//
// player2 = {
//   this.score = 0;
//   this.active = false;
// }

//roll function to be called each time die is rolled
var roll = function (){
  return Math.floor(Math.random() * 6) + 1;
}

//player prototype to be called on player to change status; need to incorporate conditional statement from frontend here
Player.prototype.activeStatus = function() {
  if((roll1) != 1 || (roll2 != 1)){
    this.active = true;
  }
}


/* frontend ------------*/
$(document).ready(function(){
//used .one() method so that on first click, new Player is created, but only on the first click; need to change screen so that player will be prompted to click again.
  var clicks = 0;
  $("button.btn").one("click", function(event){
    event.preventDefault();
    player1 = new Player();
    player2 = new Player();
    player1.activeStatus();
  });

//need to change screen so that player is prompted to click again; this includes prototype that needs to be moved to backend
  $("button.btn").click(function(){
    if((clicks === 0) && (this.active === true)){

    roll1 = roll();
    roll2 = roll();
      if((roll1 != 1) && (roll2 != 1)){
      this.score += roll1 + roll2;
    } else {
      this.score = this.score;
      this.active = false;
    }

  } else if((clicks >= 1) && (this.active === true)){
    roll3 = roll();
    roll4 = roll();
      if((roll1 != 1) && (roll2 != 1)){
        thid.score += this.score + roll3 + roll4;
      } else {
        this.score = this.score;
        this.active = false;
      }
  }
  ++clicks;

});







});
